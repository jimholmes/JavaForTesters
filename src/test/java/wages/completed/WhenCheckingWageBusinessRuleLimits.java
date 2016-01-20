package wages.completed;


import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

public class WhenCheckingWageBusinessRuleLimits extends WageComputerInitializer {
	
	float hours;
	final float RATE = 10;
	@Rule
	public ExpectedException thrown = ExpectedException.none();
	
	@Test
	public void HoursOver80ThrowsException() throws Exception {
		thrown.expect(IllegalArgumentException.class);
		hours = 81;
		
		computer.computeWages(hours, RATE);
	}
	
	@Test
	public void RateOver500ThrowsException() throws Exception {
		thrown.expect(IllegalArgumentException.class);
		hours = 40;
		float rate = 501;
		
		computer.computeWages(hours, rate);
	}

}
