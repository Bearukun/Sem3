/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import entity.Airline;
import java.util.ArrayList;
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
 * REST Web Service
 * Note, generates totally random flight. No retention build in yet. 
 * @author bearu
 */
@Path("flights")
public class Flight {

    //Needed to make and read JSON objects. Google we love you <3
    private Gson gson = new Gson();
    //Make an instance of our ConAirGenerator.
    private ConAirGenerator cag = new ConAirGenerator();

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of Flight
     */
    public Flight() {
    }

    
    @GET
    @Path("/{from}/{date}/{tickets}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFlightsFromDateTickets(@PathParam("from") String from, @PathParam("date") String date, @PathParam("tickets") int tickets) {
        
        //Make a new airline object, with the airline object returned from the CAG.
        Airline airline = cag.generateFlights(from, date, tickets);
        
        ArrayList<Airline> airlines = new ArrayList();
        airlines.add(airline);
        return gson.toJson(airlines);
        
    }
    
    @GET
    @Path("/{from}/{to}/{date}/{tickets}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFlightsFromDateTickets(@PathParam("from") String from, @PathParam("to") String to, @PathParam("date") String date, @PathParam("tickets") int tickets) {
        
        //Make a new airline object, with the airline object returned from the CAG.
        Airline airline = cag.generateFlights(from, to, date, tickets);
        
        return gson.toJson(airline);
        
    }


}
