package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Airline;
import entity.Booking;
import entity.Log;
import entity.Passenger;
import facades.MRSFacade;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import utils.AirlineRetriever;

@Path("flights")
public class Flight {

    private static Gson gson;
    private static GsonBuilder builder;
    private static AirlineRetriever r = new AirlineRetriever();
    private static List<String> urls = new ArrayList<>(r.getUrls());
    private static MRSFacade mrsf;
    private static EntityManagerFactory emf;    
    
    public Flight() {
        
        builder = new GsonBuilder();
        builder.setPrettyPrinting();
        gson = builder.create();
        emf = Persistence.createEntityManagerFactory("pumrs");
        mrsf = new MRSFacade(emf);
        
    }

    @GET
    @Path("{from}/{date}/{tickets}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFlightsFromDateTickets(@PathParam("from") String from, @PathParam("date") String date, @PathParam("tickets") int tickets) {
        List<Airline> airlines;

        airlines = urls.parallelStream().map(string -> r.sendGet(string + "/" + from + "/" + date + "/" + tickets)).collect(Collectors.toList());

        Log log = new Log(from, null, date, tickets);
        
        mrsf.addToLogSearch(log);
        
        System.out.println("REST: " + airlines);

        return gson.toJson(airlines);
        
    }

    @GET
    @Path("{from}/{to}/{date}/{tickets}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFlightsFromDateTickets(@PathParam("from") String from, @PathParam("to") String to, @PathParam("date") String date, @PathParam("tickets") int tickets) {
        List<Airline> airlines;

        airlines = urls.parallelStream().map(string -> r.sendGet(string + "/" + from +"/" + to + "/" + date + "/" + tickets)).collect(Collectors.toList());

        System.out.println("REST: " + airlines);

        return gson.toJson(airlines);
        
    }
    
    @POST
    public String getBookingDetails(){
        List<Booking> bookings = new ArrayList();
        List<Passenger> passengers = new ArrayList();
        Passenger p1 = new Passenger("a","b");
        Passenger p2 = new Passenger("c","d");
        passengers.add(p1);
        passengers.add(p2);
        Booking b1 = new Booking("COL2257","Copenhagen Kastrup(CPH)","Charles de Gaulle International(CDG)",new Date(),120,2,"Peter Hansen",passengers);
        bookings.add(b1);
        return gson.toJson(bookings);
    }
}
