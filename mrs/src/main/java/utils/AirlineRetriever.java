package utils;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Airline;
import entity.Reservation;
import entity.ReservationResponse;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import javax.net.ssl.HttpsURLConnection;
import static javax.ws.rs.core.HttpHeaders.USER_AGENT;

public class AirlineRetriever {

    private static Gson gson;
    private static Gson gOut;
    private static GsonBuilder builder;

    public AirlineRetriever() {
        builder = new GsonBuilder();
        builder.setPrettyPrinting();
        gson = builder.create();
        gOut = builder.create();
    }

    public List<String> getUrls(){
        
        List<String> urls = new ArrayList<>();
        
        urls.add("https://46.101.255.231.xip.io/airline/api/flights");
        //urls.add("https://airline.skaarup.io/api/flights");
        
        return urls;
        
    }
    
    
    
    // HTTP GET request
    public Airline sendGet(String url) {
        
        System.out.println("sendGet for: " + url);

        try {
            URL obj = new URL(url);
            HttpURLConnection con = (HttpURLConnection) obj.openConnection();

            // optional default is GET
            con.setRequestMethod("GET");

            //add request header
            con.setRequestProperty("User-Agent", USER_AGENT);

            int responseCode = con.getResponseCode();
            System.out.println("\nSending 'GET' request to URL : " + url);
            System.out.println("Response Code : " + responseCode);

            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {

                response.append(inputLine);

            }

            con.disconnect();
            System.out.println("Response: " + response);

            return gson.fromJson(response.toString(), Airline.class);

        } catch (Exception e) {

            e.getLocalizedMessage();
            return null;

        } finally {

        }

    }

    // HTTP POST request
    public ReservationResponse sendPost(Reservation reservation, String url){

       
       
                try {
                    HttpsURLConnection conn = null;
                    URL obj = new URL(url);
                    
                    conn = (HttpsURLConnection) obj.openConnection();
                    
                    conn.setRequestProperty("Method", "POST");
                    
                    conn.setDoOutput(true);
                    
                    OutputStream os = conn.getOutputStream();
                    
                    PrintWriter pw = new PrintWriter(os, true);
                    
                    String output = gOut.toJson(reservation);
                    
                    pw.println(output);
                    
                    pw.close();
                    
                    InputStream is = conn.getInputStream();
                    
                    BufferedReader rd = new BufferedReader(new InputStreamReader(is));
                    
                    StringBuilder sb = new StringBuilder();
                    
                    String line;
                    
                    while ((line = rd.readLine()) != null) {
                        
                        sb.append(line);
                        
                    }
                    
                    rd.close();
                    
                    if (conn != null){
                        
                        conn.disconnect();
                        
                    }
                    
                    return gson.fromJson(sb.toString(), ReservationResponse.class);
                    
                } catch (Exception e) {
                    
                    e.printStackTrace();
                    
                    return null;
                    
                } finally {
                    
                }

    }

}
