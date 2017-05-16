package entity;

import com.google.gson.annotations.Expose;
import java.io.Serializable;

public class Flight implements Serializable{
    
    @Expose
    public String flightId; //Format: XXXX-XXXXXXXXXXXXX (4+13 digits)
    @Expose
    public String flightNumber; //Format: ABCXXXX (Eg. COL2257)
    @Expose
    public String date; //Format: YEAR-MONTH-DATE(T)HOUR - Date+time in ISO-8601 format. Eg. "2017-05-30-T13:00:00.000Z"
    @Expose
    public int numberOfSeats;
    @Expose
    public Number totalPrice; //In euro
    @Expose
    public int travelTime; //In minutes
    @Expose
    public String origin; //IATA-Code eg. "CPH"
    @Expose    
    public String destination; //IATA-Code eg. "JFK"

    public Flight() {
    }

    public String getFlightId() {
        return flightId;
    }

    public void setFlightId(String flightId) {
        this.flightId = flightId;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
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

    public Number getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Number totalPrice) {
        this.totalPrice = totalPrice;
    }

    public int getTravelTime() {
        return travelTime;
    }

    public void setTravelTime(int travelTime) {
        this.travelTime = travelTime;
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
    
    

}
