Feature:
  As an api User
  I want to test Api calls
  So that i can make sure Api works as expected

  Scenario: Verify list users API returning users
    Given I sent a GET request to "https://reqres.in/api/users?page=2"
    Then  Response code should be 200
    And Users count should be 6
    And Users should have attributes
    |     id     |
    |  email     |
    | first_name |
    | last_name  |
    | avatar     |
    And response time should be less than 1 second

  Scenario: Verify get single user api returning user
    Given I sent a GET request to "https://reqres.in/api/users/2"
    Then  Response code should be 200
    And Users count should be 1
    And Users should have attributes
      |     id     |
      |  email     |
      | first_name |
      | last_name  |
      | avatar     |
    And response time should be less than 1 second

  Scenario: Verify invalid user
    Given I sent a GET request to "https://reqres.in/api/users/23"
    Then  Response code should be 404