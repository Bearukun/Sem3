package entity;

import java.util.ArrayList;
import java.util.List;

public class Airline {

    public String airline;
    public String slogan;
    public String code;
        
    public List<Flight> flights = new ArrayList<>();

    public Airline(String airline, String slogan, String code) {
        this.airline = airline;
        this.slogan = slogan;
        this.code = code;
    }

    public Airline() {
    }

    public String getAirline() {
        return airline;
    }

    public void setAirline(String airline) {
        this.airline = airline;
    }

    public String getSlogan() {
        return slogan;
    }

    public void setSlogan(String slogan) {
        this.slogan = slogan;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public List<Flight> getFlights() {
        return flights;
    }

    public void setFlights(List<Flight> flights) {
        this.flights = flights;
    }
    
    

}
