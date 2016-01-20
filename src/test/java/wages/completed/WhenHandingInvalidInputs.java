package wages.completed;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

public class WhenHandingInvalidInputs extends WageComputerInitializer{
	
	float hours;
	final float RATE = 10;
	@Rule
	public ExpectedException thrown = ExpectedException.none();
	
	@Test
	public void NegativeHoursThrowsExeption() throws Exception {
		thrown.expect(IllegalArgumentException.class);
		hours = -1;
		@SuppressWarnings("unused")
		float actualWages = computer.computeWages(hours, RATE);		
	}
	
	@Test
	public void NegativeRateThrowsException() throws Exception {
		thrown.expect(IllegalArgumentException.class);
		hours = 40;
		float rate = -1;
		@SuppressWarnings("unused")
		float actualWages = computer.computeWages(hours, rate);
	}

}
