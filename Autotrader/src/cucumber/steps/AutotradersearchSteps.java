package cucumber.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AutotradersearchSteps {
	
	private WebDriver driver = null; 
	
	@Given("^I navigate to Autotrader homepage$")
	public void NavigateToAutotraderHomepage() throws Throwable {
		
	
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(1, TimeUnit.SECONDS);
		 
	       driver.get("http://learn-automation.com/");
	}

	@Given("^Autotrader logo is displayed$")
	public void AutotraderlogoIsDisplayed() throws Throwable {
	    ;
	}

	@When("^I enter my postcode$")
	public void IEnterMyPostcode() throws Throwable {
	    
	}

	@When("^I select a distance from my postcode$")
	public void ISelectADistanceFromMyPostcode() throws Throwable {
	    
	}

	@When("^I select Audi from make dropdown$")
	public void ISelectAudiFromMakeDropdown() throws Throwable {
	    
	}

	@When("^I click search cars button$")
	public void IClickSearchCarsButton() throws Throwable {
	    
	}

	@Then("^the result of the search for Audi is displayed$")
	public void TheResultOfTheSearchForAudiIsDisplayed() throws Throwable {
	    
	}

	@Then("^all the cars displayed belong only to Audi$")
	public void AllTheCarsDisplayedBelongOnlyToAudi() throws Throwable {
	    
	}
	@Then("^search results page is displayed$")
	public void SearchResultsPageIsDisplayed() throws Throwable {
	}
	
	    

}
