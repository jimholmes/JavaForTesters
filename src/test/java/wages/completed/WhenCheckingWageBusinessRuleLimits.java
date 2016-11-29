package wages.completed;


import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import wages.MaxHoursExceededException;
import wages.MaxRateExceededException;

public class WhenCheckingWageBusinessRuleLimits extends WageComputerInitializer {
	
	float hours;
	final float RATE = 10;
	@Rule
	public ExpectedException thrown = ExpectedException.none();
	
	@Test
	public void HoursOver80ThrowsException() throws Exception {
		thrown.expect(MaxHoursExceededException.class);
		hours = 81;
		
		computer.computeWages(hours, RATE);
	}
	
	@Test
	public void RateOver500ThrowsException() throws Exception {
		thrown.expect(MaxRateExceededException.class);
		hours = 40;
		float rate = 501;
		
		computer.computeWages(hours, rate);
	}

}
