package wages.completed;

import static org.junit.Assert.*;

import org.junit.Test;

public class WhenComputingStraightTime extends WageComputerInitializer {
	
	float hours;
	final float RATE = 10;
	@Test
	public void Check40HoursAtRate10Returns400() throws Exception {
		hours = 40;
		float expected = 400f;
		float actualWages = computer.computeWages(hours, RATE);
		assertEquals(expected, actualWages, DELTA_ZERO);
	}
	
	@Test
	public void Check1HourAtRate10Returns10() throws Exception {
		hours = 1;
		float expected = 10f;
		float actualWages = computer.computeWages(hours, RATE);
		assertEquals(expected, actualWages, DELTA_ZERO);
	}
	
	@Test
	public void Check0HoursAtRate10Returns0() throws Exception {
		hours = 0;
		float expected = 0f;
		float actualWages = computer.computeWages(hours, RATE);
		assertEquals(expected, actualWages, DELTA_ZERO);
	}
}
