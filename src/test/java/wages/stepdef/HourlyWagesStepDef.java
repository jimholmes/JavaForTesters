package wages.stepdef;

import static org.junit.Assert.*;

import org.junit.Rule;
import org.junit.rules.ExpectedException;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import wages.MaxHoursExceededException;
import wages.MaxRateExceededException;
import wages.completed.WageComputer;
import wages.completed.WageComputerInitializer;

public class HourlyWagesStepDef extends WageComputerInitializer {

	float rate;
	float worked;

	@Rule
	public ExpectedException thrown = ExpectedException.none();

	@Before
	public void before_each_scenario() {
		computer = new WageComputer();
	}

	@Given("^hourly rate is (-?\\d+)$")
	public void hourly_rate_is(int rate) throws Throwable {
		this.rate = rate;
	}

	@When("^(-?\\d+) hours are worked$")
	public void are_worked(int hours) throws Throwable {
		this.worked = hours;
	}

	@Then("^pay should be (\\d+)$")
	public void pay_should_be(float expectedWages) throws Throwable {
		float actualWages = computer.computeWages(worked, rate);

		assertEquals(expectedWages, actualWages, DELTA_ZERO);
	}

	@Then("^an error should happen$")
	public void an_error_should_happen() throws Throwable {
		Boolean caught = false;
		try {
			computer.computeWages(worked, rate);
		} catch (IllegalArgumentException e) {
			caught = true;
		}
		assertTrue(caught);
	}
	
	@Then("^an Over Max Rate error should happen$")
	public void an_Over_Max_Rate_error_should_happen() throws Throwable {
		Boolean caught = false;
		try {
			computer.computeWages(worked, rate);
		} catch (MaxRateExceededException e) {
			caught = true;
		}
		assertTrue(caught);
	}
	
	@Then("^an Over Max Hours error should happen$")
	public void an_Over_Max_Hours_error_should_happen() throws Throwable {
		Boolean caught = false;
		try {
			computer.computeWages(worked, rate);
		} catch (MaxHoursExceededException e) {
			caught = true;
		}
		assertTrue(caught);
	}
	

}
