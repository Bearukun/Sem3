package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Airline;
import entity.Booking;
import entity.Passenger;
import entity.Reservation;
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
public class ReservationResource {

    private static Gson gson;
    private static Gson gOut;
    private static GsonBuilder builder;
    private static AirlineRetriever r = new AirlineRetriever();
    private static List<String> urls = new ArrayList<>(r.getUrls());

    public ReservationResource() {

        builder = new GsonBuilder();
        builder.setPrettyPrinting();
        builder.excludeFieldsWithoutExposeAnnotation();
        gson = builder.create();
        gOut = builder.create();

    }

    @POST
    @Path("{flightId}")
    @Produces(MediaType.APPLICATION_JSON)
    public String postFlightsReservation(@PathParam("flightId") String flightId, String json) {
        
       
        
        Reservation reservation = gson.fromJson(json, Reservation.class);
       
        return gOut.toJson(r.sendPost(reservation, "https://46.101.255.231.xip.io/airline/api/reservation/"+flightId));
        
   
    }

}
