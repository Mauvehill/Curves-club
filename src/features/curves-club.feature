Feature: Style solutions

   I want to check the style solutions page

   Background:
      Given I visit the Curves club lingerie website

   # Scenario: Check navigation links
   #    Then I should see 5 links

   # Scenario: Check for Styles
   #    # Notes:
   #    # let string = whatever double quotes in the steps
   #    # let string = 'Styles Solutions' in the steps
   #    # let int = '3' in the steps
   #    When I click 'Styles Solutions' tab - 3
   #    Then the header title should be displayed

   Scenario Outline: Check Tab Sections
      When I click <tabs> tab - <tabNumber>
      Then the <headerTitle> for the corresponding tab <tabNumber> should be displayed

      Examples:
         | tabs           | tabNumber | headerTitle    |
         | 'About'        | 1         | 'about'        |
         | 'Who we serve' | 2         | 'fuller woman' |
# | 'Who we serve'     | 2         |
# | 'Styles Solutions' | 3         |


# Scenario: Contact form submission
#    When I click Book your bra fitting today
#    And the contact submission form is displayed
#    And I fill in the contact form
#    Then I should see submission confirmation message

