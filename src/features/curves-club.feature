Feature: Style solutions

   I want to check the style solutions page

   Background:
      Given I visit the Curves club lingerie website

   # Scenario: Check navigation links
   #    Then I should see 5 links

   Scenario: Check for Styles
      # Notes:
      # var string = whatever double quotes in the steps
      # var string = 'Styles Solutions' in the steps
      # var int = '3' in the steps
      When I click 'Styles Solutions' tab - 3
      Then the header title should be displayed

# Scenario: Check for Who We Serve
# ***ASSIGNMENT:***
# parametirize the step below to be the same as above to use the same step.
# Remove old step
#    When I click Who We Serve tab
#    Then the header title is displayed

# Scenario: Contact form submission
#    When I click Book your bra fitting today
#    And the contact submission form is displayed
#    And I fill in the contact form
#    Then I should see submission confirmation message

