@math
Feature: Web Selenium Test
open shopping cart page manage the web element.

  Scenario: shopping cart
    Given open the browser
    Then Add to Cart button should be Sold Out
    When I click Add to Cart btn
    And the total should be "$4.99"


  