package utils;

import entity.Airline;


 
public class Sandbox {

    public static void main(String[] args) throws Exception {
        
        AirlineRetriever rt = new AirlineRetriever();
        
        Airline temp = rt.sendGet("https://46.101.255.231.xip.io/airline/api/flights/CPH/2017-05-03/4/");

        System.out.println(temp.airline);

    }

    

}
