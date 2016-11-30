package wages;

import wages.completed.WageComputer;

public class CustomTestFramework {
	
	static WageComputer computer = new WageComputer();
	
	static public float invoke_wage_computer(float hours, float rate) throws MaxRateExceededException, MaxHoursExceededException {
		return computer.computeWages(hours, rate);
	}

}
