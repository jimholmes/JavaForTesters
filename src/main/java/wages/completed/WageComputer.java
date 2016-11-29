package wages.completed;

import wages.MaxHoursExceededException;
import wages.MaxRateExceededException;

public class WageComputer {

	public float computeWages(float hours, float rate) throws MaxRateExceededException, MaxHoursExceededException {
		if (hours < 0) {
			throw new IllegalArgumentException("Hours must be greater than zero. Was: "+hours);
		}
		if (hours > 80) {
			throw new MaxHoursExceededException("Hours must be less than or equal to 80. Was: "+hours);
		}
		if (rate < 0) {
			throw new IllegalArgumentException("Rate must be greater than zero. Was: " + rate);
		}
		if (rate > 500) {
			throw new MaxRateExceededException("Rate cannot be more than 500. Was: "+ rate);
		}
		float wages = 0;
		if (hours <= 40) {
			wages = hours * rate;
		}else {
			wages = rate * 40;
			float overtime = (hours - 40f) * (rate * 1.5f);
			wages += overtime;
		}
		return wages;
	}

}
