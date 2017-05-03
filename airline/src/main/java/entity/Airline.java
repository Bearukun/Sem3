package entity;

import java.util.ArrayList;
import java.util.List;

public class Airline {

    public String airline, slogan, code;
    public List<Flight> flights = new ArrayList();

    public Airline(String airline, String slogan, String code) {
        this.airline = airline;
        this.slogan = slogan;
        this.code = code;
    }

}
