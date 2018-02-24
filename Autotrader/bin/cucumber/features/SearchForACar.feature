Feature: Search Cars
		In  order to view different cars for sale
		as an Autotrader customer
		I want the ability to search for a car of my choice
		
Scenario: Search for Audi cars on homepage search box
		Given I navigate to Autotrader homepage
		And Autotrader logo is displayed
		When I enter my postcode
		And I select a distance from my postcode
		And I select Audi from make dropdown
		And I click search cars button
		Then the result of the search for Audi is displayed
		And all the cars displayed belong only to Audi
		And search results page is displayed