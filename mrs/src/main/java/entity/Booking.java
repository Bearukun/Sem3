package entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Booking {

    public String flightNumber;
    public String origin;
    public String destination;
    public Date date;
    public int flightTime;
    public int numberOfSeats;
    public String reserveeName;
    public List<Passenger> passengers;

    public Booking() {
    }

    public Booking(String flightNumber, String origin, String destination, Date date, int flightTime, int numberOfSeats, String reserveeName, List<Passenger> passengers) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.date = date;
        this.flightTime = flightTime;
        this.numberOfSeats = numberOfSeats;
        this.reserveeName = reserveeName;
        this.passengers = passengers;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getFlightTime() {
        return flightTime;
    }

    public void setFlightTime(int flightTime) {
        this.flightTime = flightTime;
    }

    public int getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(int numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
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

    @Override
    public String toString() {
        return "Booking{" + "flightNumber=" + flightNumber + ", origin=" + origin + ", destination=" + destination + ", date=" + date + ", flightTime=" + flightTime + ", numberOfSeats=" + numberOfSeats + ", reserveeName=" + reserveeName + ", passengers=" + passengers + '}';
    }
}
