Feature: Login

    I want to log into Conduit

    Scenario: Conduit Login
        Given I open Conduit login page
        When I type in 
            | username | password |
            | dperez@gmail.com | 12345678 |
        And I click on Sign in button
        Then "Your Feed" should be shown