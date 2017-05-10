package utils;

import entity.Airline;
import entity.Flight;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Random;
import java.util.TimeZone;

/**
 * Class used to generate the Airline "Con Air" with flights As of now, there's
 * no retention build in... Everything is random.
 */
public class ConAirGenerator {

    private Random rng = new Random();

    private String[] IataCodes = {"CPH", "JFK", "LHR", "AMS", "BCN"};

    /**
     * Method used to generate flights from an airport with no given destination
     *
     * @param from String containing the IATA-code of the departure airport
     * @param date String containing the date of the desired departure
     * @param seats int containing the number of desired tickets
     * @return an Airline object with a random list of flights.
     */
    public Airline generateFlights(String from, String date, int seats) {

        //Make new instance of an Airline. 
        Airline airline = new Airline("Con Air", "We will rip you off... the ground!", "CON");

        //Now lets call upon the rng gods to deside how many flights we want
        int numOfFlights = rng.nextInt(10) + 2; //+2 cos we want at least one

        for (int i = 0; i < numOfFlights; i++) {

            Flight flight = new Flight();

            int flightNumber = rng.nextInt(8999) + 1001;

            flight.flightId = flightNumber + "-" + (rng.nextInt(9999999) + 9999999) + "00000";

            flight.flightNumber = airline.code + "-" + flightNumber;

            //Let's generate a random depature time, ne? ^___^
            flight.date = getDepartureTime(date);

            //Let's cheat and say that the flight has unlimited seats yes?
            flight.numberOfSeats = seats;

            //Meh way calculate a travel time but meh
            flight.travelTime = rng.nextInt(720) + 1;

            //Now let's calculate the price in another meh way
            flight.totalPrice = seats * (flight.travelTime * 0.6);

            flight.origin = from;

            flight.destination = IataCodes[rng.nextInt(IataCodes.length)];

            airline.flights.add(flight);

        }

        return airline;

    }

    /**
     * Method used to generate flights from an airport with a given destination
     *
     * @param from String containing the IATA-code of the departure airport
     * @param to String containing the IATA-code of the departure airport
     * @param date String containing the date of the desired departure
     * @param seats int containing the number of desired tickets
     * @return an Airline object with a random list of flights.
     */
    public Airline generateFlights(String from, String to, String date, int seats) {

        //Make new instance of an Airline. 
        Airline airline = new Airline("Con Air", "We will rip you off... the ground!", "CON");

        //Now lets call upon the rng gods to deside how many flights we want
        int numOfFlights = rng.nextInt(10) + 2; //+2 cos we want at least one

        for (int i = 0; i < numOfFlights; i++) {

            Flight flight = new Flight();

            int flightNumber = rng.nextInt(8999) + 1001;

            flight.flightId = flightNumber + "-" + rng.nextInt(99999999) + 99999999 + "00000";

            flight.flightNumber = airline.code + "-" + flightNumber;

            //Let's generate a random depature time, ne? ^___^
            flight.date = getDepartureTime(date);

            //Let's cheat and say that the flight has unlimited seats yes?
            flight.numberOfSeats = seats;

            //Meh way calculate a travel time but meh
            flight.travelTime = rng.nextInt(720) + 1;

            //Now let's calculate the price in another meh way
            flight.totalPrice = seats * (flight.travelTime * 0.6);

            flight.origin = from;

            flight.destination = to;

            airline.flights.add(flight);

        }

        return airline;

    }

    private String getDepartureTime(String date) {

        //First we need to split the data from the String
        String[] stringDate = date.split("-");

        //Then we need an int array to hold the values
        int[] intDate = new int[3];

        //For loop to add values to int array
        for (int i = 0; i < stringDate.length; i++) {

            intDate[i] = Integer.parseInt(stringDate[i]);

        }

        //Create new calendar object, and take the given date, with rng hour and min
        Calendar calendar = new GregorianCalendar(intDate[0], intDate[1], intDate[2], rng.nextInt(24), rng.nextInt(60));

        //Make sure not to use the servers timezone, but UTC instead
        TimeZone timeZone = TimeZone.getTimeZone("UTC");

        //Make the dateformat
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

        //Apply timezone
        dateFormat.setTimeZone(timeZone);

        //Return object
        return dateFormat.format(calendar.getTime());

    }

}
