package rest;

import com.google.gson.Gson;
import entity.Airline;
import entity.Flight;
import facades.AirlineFacade;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import utils.ConAirGenerator;

/**
 * REST Web Service Note, generates totally random flight. No retention build in
 * yet.
 *
 * @author bearu
 */
@Path("flights")
public class Flights {

    //Needed to make and read JSON objects. Google we love you <3
    private Gson gson = new Gson();
    //Make an instance of our ConAirGenerator.
    private ConAirGenerator cag = new ConAirGenerator();

    private AirlineFacade facade;

    private EntityManagerFactory emf;

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of Flight
     */
    public Flights() {

        emf = Persistence.createEntityManagerFactory("pu");
        facade = new AirlineFacade(emf);

    }

    /**
     * Method to handle get call with no to destination
     *
     * @param from from airport
     * @param date the date
     * @param tickets how many tickets
     * @return string, in form of a json object
     */
    @GET
    @Path("/{from}/{date}/{tickets}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFlightsFromDateTickets(@PathParam("from") String from, @PathParam("date") String date, @PathParam("tickets") int tickets) {

        //Check if flight already exists
        //First call the facade to retrieve any flight on given from og date
        List<Flight> flights = facade.getFlightsByOriginAndDate(from, date);
        
        System.out.println("List from facade:" + flights);

        //If there are flights available
        if (flights != null && flights.size() > 0) {
            
            for (int i = 0; i < flights.size(); i++) {
                
                flights.get(i).setNumberOfSeats(tickets);
                
            }
            
            Airline airline = new Airline();
            
            airline.airline = "Con Air";
            
            airline.slogan = "We will rip you off... the ground!";
            
            airline.flights = flights;
            
            return gson.toJson(airline);
        //If not    
        } else {
            
            //Make a new airline object, with the airline object returned from the CAG.
            Airline airline = cag.generateFlights(from, date, tickets);
            
            for (int i = 0; i < airline.flights.size(); i++) {
                
                facade.addFlight(airline.flights.get(i));
                
            }
            
            return gson.toJson(airline);
            
        }

    }

    @GET
    @Path("/{from}/{to}/{date}/{tickets}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFlightsFromDateTickets(@PathParam("from") String from, @PathParam("to") String to, @PathParam("date") String date, @PathParam("tickets") int tickets) {

       //Check if flight already exists
        //First call the facade to retrieve any flight on given from og date
        List<Flight> flights = facade.getFlightsByOriginAndDestinationAndDate(from, to, date);
        
        System.out.println("List from facade:" + flights);

        //If there are flights available
        if (flights != null && flights.size() > 0) {
            
            for (int i = 0; i < flights.size(); i++) {
                
                flights.get(i).setNumberOfSeats(tickets);
                
            }
            
            Airline airline = new Airline();
            
            airline.airline = "Con Air";
            
            airline.slogan = "We will rip you off... the ground!";
            
            airline.flights = flights;
            
            return gson.toJson(airline);
        //If not    
        } else {
            
            //Make a new airline object, with the airline object returned from the CAG.
            Airline airline = cag.generateFlights(from, to, date, tickets);
            
            for (int i = 0; i < airline.flights.size(); i++) {
                
                facade.addFlight(airline.flights.get(i));
                
            }
            
            return gson.toJson(airline);
            
        }

    }

}
