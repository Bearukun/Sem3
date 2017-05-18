package entity;

import com.google.gson.annotations.Expose;
import java.util.List;

public class ReservationResponse {

    @Expose
    String flightNumber;

    @Expose
    String origin; // IATA-Code

    @Expose
    String destination; // IATA-Code

    @Expose
    String date; // ISO-8601 date+time

    @Expose
    int numberOfSeats;

    @Expose
    int flightTime;

    @Expose
    String reserveeName;

   // @OneToMany
    @Expose
    List<Passenger> passengers;

    public ReservationResponse() {
    }

    public ReservationResponse(Flight flight, Reservation res) {
        flightNumber = flight.getFlightNumber();
        origin = flight.getOrigin();
        destination = flight.getDestination();
        date = flight.getDate();
        numberOfSeats = res.getNumberOfSeats();
        flightTime = flight.getTraveltime();
        reserveeName = res.getReserveeName();
        passengers = res.getPassengers();
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(int numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }

    public int getFlightTime() {
        return flightTime;
    }

    public void setFlightTime(int flightTime) {
        this.flightTime = flightTime;
    }

    public String getReserveeName() {
        return reserveeName;
    }

    public void setReserveeName(String reserveeName) {
        this.reserveeName = reserveeName;
    }

    public List<Passenger> getPassengers() {
        return passengers;
    }

    public void setPassengers(List<Passenger> passengers) {
        this.passengers = passengers;
    }
    
    

}
