Feature: Style solutions

   I want to check the style solutions page 

   Background:
    Given I visit the Curves club lingerie website

   Scenario: Check navigation links
      Then I should see 5 links
      
   Scenario: Check for Styles
    When I click Styles Solutions tab
    Then the header title should be displayed


   Scenario: Contact form submission
    When I click Book your bra fitting today
    Then the contact submission form is displayed 
   #    And I fill in the contact form 
      