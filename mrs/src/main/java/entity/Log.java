/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity(name= "LOG")
public class Log implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    String fromDes;
    String toDes;
    String flightDate; 
    int ticketAmount;

    public Log() {
    }

    public Log(String fromDes, String toDes, String flightDate, int ticketAmount) {
        this.fromDes = fromDes;
        this.toDes = toDes;
        this.flightDate = flightDate;
        this.ticketAmount = ticketAmount;
    }

    public String getFromDes() {
        return fromDes;
    }

    public void setFromDes(String fromDes) {
        this.fromDes = fromDes;
    }

    public String getToDes() {
        return toDes;
    }

    public void setToDes(String toDes) {
        this.toDes = toDes;
    }

    public String getFlightDate() {
        return flightDate;
    }

    public void setFlightDate(String flightDate) {
        this.flightDate = flightDate;
    }

    public int getTicketAmount() {
        return ticketAmount;
    }

    public void setTicketAmount(int ticketAmount) {
        this.ticketAmount = ticketAmount;
    }
    
    

   

    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    
    

  
    
}
