$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SearchForACar.feature");
formatter.feature({
  "line": 1,
  "name": "Search Cars",
  "description": "In  order to view different cars for sale\nas an Autotrader customer\nI want the ability to search for a car of my choice",
  "id": "search-cars",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Search for Audi cars on homepage search box",
  "description": "",
  "id": "search-cars;search-for-audi-cars-on-homepage-search-box",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I navigate to Autotrader homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Autotrader logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter my postcode",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select a distance from my postcode",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select Audi from make dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click search cars button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the result of the search for Audi is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "all the cars displayed belong only to Audi",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "search results page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "AutotradersearchSteps.NavigateToAutotraderHomepage()"
});
formatter.result({
  "duration": 20822929868,
  "status": "passed"
});
formatter.match({
  "location": "AutotradersearchSteps.AutotraderlogoIsDisplayed()"
});
formatter.result({
  "duration": 15145,
  "status": "passed"
});
formatter.match({
  "location": "AutotradersearchSteps.IEnterMyPostcode()"
});
formatter.result({
  "duration": 15425,
  "status": "passed"
});
formatter.match({
  "location": "AutotradersearchSteps.ISelectADistanceFromMyPostcode()"
});
formatter.result({
  "duration": 15753,
  "status": "passed"
});
formatter.match({
  "location": "AutotradersearchSteps.ISelectAudiFromMakeDropdown()"
});
formatter.result({
  "duration": 14494,
  "status": "passed"
});
formatter.match({
  "location": "AutotradersearchSteps.IClickSearchCarsButton()"
});
formatter.result({
  "duration": 14135,
  "status": "passed"
});
formatter.match({
  "location": "AutotradersearchSteps.TheResultOfTheSearchForAudiIsDisplayed()"
});
formatter.result({
  "duration": 11744,
  "status": "passed"
});
formatter.match({
  "location": "AutotradersearchSteps.AllTheCarsDisplayedBelongOnlyToAudi()"
});
formatter.result({
  "duration": 20259,
  "status": "passed"
});
formatter.match({
  "location": "AutotradersearchSteps.SearchResultsPageIsDisplayed()"
});
formatter.result({
  "duration": 10987,
  "status": "passed"
});
});