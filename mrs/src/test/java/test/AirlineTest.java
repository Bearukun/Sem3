/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import entity.Airline;
import entity.Reservation;
import entity.ReservationResponse;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.*; 
import io.restassured.parsing.Parser;
import java.util.ArrayList;
import java.util.List;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.hasItems;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.BeforeClass;
import utils.AirlineRetriever;

/**
 *
 * @author Hannibal
 */
public class AirlineTest {
    
   
    
    public AirlineTest() {
    }

    /**
     * AirlineTest of getUrls method, of class AirlineRetriever.
     */
    @Test
    public void testGetUrls() {
        System.out.println("getUrls");
        AirlineRetriever instance = new AirlineRetriever();
        List<String> expResult = new ArrayList<>();
        expResult.add("https://46.101.255.231.xip.io/airline/api/flights");
        List<String> result = instance.getUrls();
        assertEquals(expResult, result);
    }
    
    @Test
        public void testGenerateFlights(){

       
                    get("http://localhost:8084/airline/api/flights/CPH/2017-05-03/4/").
                            then().body("slogan", equalTo("We will rip you off... the ground!"));
                    
        }
        @Test
        public void testGenerateFlightsWithDest(){

       
                    get("http://localhost:8084/airline/api/flights/CPH/BCN/2017-05-03/4/").
                            then().body("slogan", equalTo("We will rip you off... the ground!"));
                    
        }
}
