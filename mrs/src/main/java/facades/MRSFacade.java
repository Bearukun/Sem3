/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entity.Flight;
import entity.Log;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;


public class MRSFacade {
    
   EntityManagerFactory emf;

    public MRSFacade(EntityManagerFactory emf) {

        this.emf = emf;

    }

    private EntityManager getEntityManager() {

        return emf.createEntityManager();

    }
   
    public void addToLogSearch(Log log){
    
        EntityManager em = getEntityManager();
        
        try{
            
            em.getTransaction().begin();
            
            em.persist(log);
            
            em.getTransaction().commit();
            

        } finally {
        
            em.close();
            
        }
        
    }
    
    

    public Log getLog(int i) {
        EntityManager em = getEntityManager();
        try {
            return em.find(Log.class, i);
            
        } finally {
        
            em.close();
        }
        
      
    }

    
    
}
