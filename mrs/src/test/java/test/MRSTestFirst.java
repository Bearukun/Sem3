
package test;

import entity.Log;
import entity.PU;
import facades.MRSFacade;
import javax.persistence.Persistence;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;


public class MRSTestFirst {
    
     MRSFacade mrsf;
    
    
  
    
    public void setPersistenceUnit(){
        PU.setPU_Name("pumrs");
    }
    
    @Before
    public void initFacade(){
        setPersistenceUnit();
        mrsf = new MRSFacade(Persistence.createEntityManagerFactory("pumrs"));
        
    }
    
    @Test
    public void testLog(){
        
        
        Log log = new Log("LAX", "CPH", "2017-06-10", 10);
        mrsf.addToLogSearch(log);
        Log returnLog = mrsf.getLog(1);
        assertEquals(log, log);
        
        
        
    }
}
