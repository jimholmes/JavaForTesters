package wages.completed;
public class WhenComputingStraightTimeProgram {
	
	public static void main(String[] args) {
		WhenComputingStraightTimeProgram tester = new WhenComputingStraightTimeProgram();
		tester.check40HoursAt5RateReturns200();
	}
	
	public void check40HoursAt5RateReturns200() {
		int rate = 5;
		int hours = 40;
		
		float wages = computeHourlyWages(hours, rate);
		
		if (wages==200) {
			System.out.println("Test is good!");
		}else {
			System.out.println("Test failed! Wages");
		}
	}

	private float computeHourlyWages(int hours, int rate) {
		return 0;
	}

}
