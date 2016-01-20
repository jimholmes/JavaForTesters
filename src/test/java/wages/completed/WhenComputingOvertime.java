package wages.completed;

import static org.junit.Assert.*;

import org.junit.Test;

public class WhenComputingOvertime extends WageComputerInitializer{
	float hours;
	final float RATE = 10;
	@Test
	public void Check41HoursAtRate10Returns415() throws Exception {
		hours=41;
		float expected = 415;
		
		float actualWages = computer.computeWages(hours, RATE);
		assertEquals(expected, actualWages, DELTA_ZERO);
	}
	
	@Test
	public void Check80HoursAtRate10Returns1000() throws Exception {
		hours = 80;
		float expected = 1000;
		
		float actualWages = computer.computeWages(hours, RATE);
		assertEquals(expected, actualWages, DELTA_ZERO);
	}

}
