package facades;

import entity.Flight;
import entity.Reservation;
import entity.ReservationResponse;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;

public class AirlineFacade {

    EntityManagerFactory emf;

    public AirlineFacade(EntityManagerFactory emf) {

        this.emf = emf;

    }

    private EntityManager getEntityManager() {

        return emf.createEntityManager();

    }

    public List<Flight> getFlightsByOriginAndDate(String origin, String date) {

        EntityManager em = getEntityManager();

        TypedQuery<Flight> query = em.createQuery("SELECT f FROM FLIGHT f WHERE f.origin=:org AND f.date LIKE :date", Flight.class);

        query.setParameter("org", origin);

//        System.out.println(date);
//        System.out.println(date.split("T")[0]);
        query.setParameter("date", date.split("T")[0] + "%");

        return query.getResultList();

    }

    public List<Flight> getFlightsByOriginAndDestinationAndDate(String origin, String destination, String date) {

        EntityManager em = getEntityManager();

        TypedQuery<Flight> query = em.createQuery("SELECT f FROM FLIGHT f WHERE f.origin=:org AND f.destination=:destination AND f.date LIKE :date", Flight.class);

        query.setParameter("org", origin);

        query.setParameter("destination", destination);

        query.setParameter("date", date.split("T")[0] + "%");

        return query.getResultList();
    }

    public Flight getFlightByFlightId(String id) {

        EntityManager em = getEntityManager();

        try {

            return em.find(Flight.class, id);

        } finally {

            em.close();

        }

    }

    public Flight addFlight(Flight flight) {

        EntityManager em = getEntityManager();

        try {

            em.getTransaction().begin();

            em.persist(flight);

            em.getTransaction().commit();

            return flight;

        } finally {

            em.close();

        }

    }

    public Reservation getReservationBytId(int id) {

        EntityManager em = getEntityManager();

        try {

            return em.find(Reservation.class, id);

        } finally {

            em.close();

        }

    }

    public Reservation addReservation(Reservation reservation) {

        EntityManager em = getEntityManager();

        try {

            em.getTransaction().begin();

            em.persist(reservation);

            em.getTransaction().commit();

            return reservation;

        } finally {

            em.close();

        }

    }

    public ReservationResponse getReservationResponse(Reservation reservation) {

        Flight flight = getFlightByFlightId(reservation.getFlightID());

        return new ReservationResponse(flight, reservation);

    }

}
