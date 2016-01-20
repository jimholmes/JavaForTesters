package wages.completed;

import org.junit.Before;

public class WageComputerInitializer {

	protected WageComputer computer;
	protected final float DELTA_ZERO = 0;

	@Before
	public void RunBeforeEveryTest() {
		computer = new WageComputer();
	}

}