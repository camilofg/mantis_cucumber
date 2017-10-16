Feature: Create new Issue in Mantis Bug Tracker
    As an authenticated user I want to register a new Bug to track

Scenario Outline: Usser logged create a new issue succesfully

Given I am again logged into Mantis  
    And I go to Report Issues menu
    And I fill with <assignedTo> and <summary> and <description>
    And I Submit Issue
    Then Then I expect to see <description>

    Examples:
    | assignedTo     | summary                      | description    |
    | 1              | Test creation of new Issue   | Test creation  |