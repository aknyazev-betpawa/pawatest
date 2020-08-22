Feature:
  As an api User
  I want to test Api calls
  So that i can make sure Api works as expected

  Scenario: Verify deleting user
    Given I sent a DELETE request to "https://reqres.in/api/users/2"
    Then  Delete request Response code should be 204