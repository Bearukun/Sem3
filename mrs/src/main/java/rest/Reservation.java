package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Airline;
import entity.Booking;
import entity.Passenger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import utils.AirlineRetriever;

@Path("reservation")
public class Reservation {

    private static Gson gson;
    private static GsonBuilder builder;
    private static AirlineRetriever r = new AirlineRetriever();
    private static List<String> urls = new ArrayList<>(r.getUrls());

    public Reservation() {
        
        builder = new GsonBuilder();
        builder.setPrettyPrinting();
        gson = builder.create();
        
    }

    @POST
    @Path("{flightId}")
    public String getBookingDetails(@PathParam("flightId") String flightId){
        List<Booking> bookings = new ArrayList();
        List<Passenger> passengers = new ArrayList();
        Passenger p1 = new Passenger("a","b");
        Passenger p2 = new Passenger("c","d");
        passengers.add(p1);
        passengers.add(p2);
        Booking b1 = new Booking(flightId,"Copenhagen Kastrup(CPH)","Charles de Gaulle International(CDG)",new Date(),120,2,"Peter Hansen",passengers);
        bookings.add(b1);
        return gson.toJson(bookings);
    }
}
