package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Flight;
import entity.Reservation;
import entity.ReservationResponse;
import facades.AirlineFacade;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 */
@Path("reservation")
public class ReservationResource {

    @Context
    private UriInfo context;

    private Gson gson = new Gson();
    private Gson gOut;
    private GsonBuilder builder;

    private EntityManagerFactory emf;
    private AirlineFacade facade;

    /**
     * Creates a new instance of ReservationResource
     */
    public ReservationResource() {

        builder = new GsonBuilder();
        builder.excludeFieldsWithoutExposeAnnotation();
        gOut = builder.create();
        emf = Persistence.createEntityManagerFactory("pu");
        facade = new AirlineFacade(emf);

    }

    /**
     * Retrieves representation of an instance of rest.ReservationResource
     *
     * @return an instance of java.lang.Integer
     */
    @GET
    @Produces(MediaType.APPLICATION_XML)
    public Integer getXml() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }


    @POST
    @Path("{flightId}")
    @Produces(MediaType.APPLICATION_JSON)
    public String postFlightsReservation(@PathParam("flightId") String flightId, String json) {
        
        System.out.println("HEJ");
        
        Reservation reservation = gson.fromJson(json, Reservation.class);
        
        System.out.println(reservation);
        
        Flight flight = facade.getFlightByFlightId(flightId);
        
        facade.addReservation(reservation);
        
        return gOut.toJson(new ReservationResponse(flight, reservation));
        
    }
    
}
