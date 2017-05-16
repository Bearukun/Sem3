package entity;

public class Flight {
    
    public String flightId; //Format: XXXX-XXXXXXXXXXXXX (4+13 digits)
    public String flightNumber; //Format: ABCXXXX (Eg. COL2257)
    public String date; //Format: YEAR-MONTH-DATE(T)HOUR - Date+time in ISO-8601 format. Eg. "2017-05-30-T13:00:00.000Z"
    public int numberOfSeats;
    public Number totalPrice; //In euro
    public int traveltime; //In minutes
    public String origin; //IATA-Code eg. "CPH"
    public String destination; //IATA-Code eg. "JFK"

}
