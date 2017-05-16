package utils;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Airline;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import javax.net.ssl.HttpsURLConnection;
import static javax.ws.rs.core.HttpHeaders.USER_AGENT;

public class AirlineRetriever {

    private static Gson gson;
    private static GsonBuilder builder;

    public AirlineRetriever() {
        builder = new GsonBuilder();
        builder.setPrettyPrinting();
        gson = builder.create();
    }

    public List<String> getUrls(){
        
        List<String> urls = new ArrayList<>();
        
        urls.add("https://46.101.255.231.xip.io/airline/api/flights");
        urls.add("https://airline.skaarup.io/api/flights");
        
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
    public void sendPost(String url) throws Exception {

        URL obj = new URL(url);
        HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();

        //add reuqest header
        con.setRequestMethod("POST");
        con.setRequestProperty("User-Agent", USER_AGENT);
        con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");

        String urlParameters = "sn=C02G8416DRJM&cn=&locale=&caller=&num=12345";

        // Send post request
        con.setDoOutput(true);
        DataOutputStream wr = new DataOutputStream(con.getOutputStream());
        wr.writeBytes(urlParameters);
        wr.flush();
        wr.close();

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'POST' request to URL : " + url);
        System.out.println("Post parameters : " + urlParameters);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        System.out.println(response.toString());

    }

}
