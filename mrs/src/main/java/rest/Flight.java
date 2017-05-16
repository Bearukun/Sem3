package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Airline;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
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

    public Flight() {
        
        builder = new GsonBuilder();
        builder.setPrettyPrinting();
        gson = builder.create();
        
    }

    @GET
    @Path("{from}/{date}/{tickets}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFlightsFromDateTickets(@PathParam("from") String from, @PathParam("date") String date, @PathParam("tickets") int tickets) {
        List<Airline> airlines;

        airlines = urls.parallelStream().map(string -> r.sendGet(string + "/" + from + "/" + date + "/" + tickets)).collect(Collectors.toList());

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

}
