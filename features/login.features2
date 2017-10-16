Feature: Login into Mantis
    As an user I want to authenticate myself within mantis website in order to track my bugs

Scenario Outline: Login fail with wrong inputs 

Given I go to Mantis home screen
    And I fill with <username>
    And I continue to login
    And I fill Password field with <password>
    And I continue to login
    Then I expect to get <error>

    Examples:
    | username                 | error                                                                      |    password |
    | rcforero1                 | Your account may be disabled or blocked or the username/password you entered is incorrect.   | Asdf123 |


Scenario Outline: Login succesfull with right inputs 

  Given I go to Mantis home screen
    And I fill with <username>
    And I continue to login
    And I fill Password field with <password>
    And I continue to login
    Then I expect to go to <newUrl>

    Examples:
    | username                 | newUrl                                            |    password |
    | rcforero                 | http://127.0.0.1/mantis/my_view_page.php   | Qwerty123 |


