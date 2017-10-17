Feature: Create new project in Mantis Bug Tracker
    As an authenticated user I want to create a new project

Scenario Outline: User logged create a new project not succesfully

Given I am logged into Mantis  
    And I go to Manage menu
    And I click in Create New Project
    And I fill with <projectName> and <description>
    And I Add Project
    Then I expect to see <error>

    Examples:
    | projectName                    | error                    | description  |
    |                                | APPLICATION ERROR #702   |              |



Scenario Outline: User logged create a new project succesfully

Given I am logged into Mantis  
    And I go to Manage menu
    And I click in Create New Project
    And I fill with <projectName> and <description>
    And I Add Project
    Then I expect to get the number of project be plus 1

    Examples:
    | projectName                       | description                                   | 
    | Nuevo proyecto Prueba Cucumber    | Description de prueba para nuevo proyecto     | 

