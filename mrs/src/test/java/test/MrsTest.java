
package test;

import entity.Log;
import entity.PU;
import facades.MRSFacade;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;


public class MrsTest {
    
 
    private static MRSFacade mrsf;
    private static EntityManagerFactory emf;
    
    
    @Before
    public void initFacade(){
        
        emf = Persistence.createEntityManagerFactory("pumrs");
        mrsf = new MRSFacade(emf);
        
    }
    
    @Test
    public void testLog(){
        
        
        Log log = new Log("LAX", "CPH", "2017-06-10", 10);
        mrsf.addToLogSearch(log);
        Log returnLog = mrsf.getLog(1);
        assertEquals(returnLog, log);
        
        
        
    }
}
