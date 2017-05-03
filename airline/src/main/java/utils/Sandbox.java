package utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Random;
import java.util.TimeZone;

/**
 *
 * @author bearu
 */
public class Sandbox {

    public static void main(String[] args) {

        Random rng = new Random();

        System.out.println(rng.nextInt(99999999) + 99999999 + "w" + 00000);

        System.out.println(getDepartureTime("2017-05-03"));

        System.out.println(rng.nextInt(720) + 1);
        
        String[] IataCodes = {"CPH", "JFK", "LHR", "AMS", "BCL"};
 
        System.out.println(IataCodes[rng.nextInt(IataCodes.length)]);
        System.out.println(IataCodes[rng.nextInt(IataCodes.length)]);
        System.out.println(IataCodes[rng.nextInt(IataCodes.length)]);
        System.out.println(IataCodes[rng.nextInt(IataCodes.length)]);
        System.out.println(IataCodes[rng.nextInt(IataCodes.length)]);
        System.out.println(IataCodes[rng.nextInt(IataCodes.length)]);

    }

    private static String getDepartureTime(String date) {

        Random rng = new Random();
        //First we need to split the data from the String
        String[] stringDate = date.split("-");

        //Then we need an int array to hold the values
        int[] intDate = new int[3];

        //For loop to add values to int array
        for (int i = 0; i < stringDate.length; i++) {

            intDate[i] = Integer.parseInt(stringDate[i]);

        }

        //Create new calendar object, and take the given date, with rng hour and min
        Calendar calendar = new GregorianCalendar(intDate[0],
                intDate[1],
                intDate[2],
                rng.nextInt(24),
                rng.nextInt(60));

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
