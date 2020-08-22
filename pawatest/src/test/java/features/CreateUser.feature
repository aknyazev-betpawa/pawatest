Feature:
  As an api User
  I want to test Api calls
  So that i can make sure Api works as expected

  Scenario: Verify creating user
    Given I sent a POST request to "https://reqres.in/api/users" with "AddUser" payload
    Then  Post request Response code should be 201
    And Post response should have attributes
      |     name     |
      |  job         |
      |     id       |
      | createdAt    |

  Scenario: Verify updating user with PUT
    Given I sent a PUT request to "https://reqres.in/api/users/2" with "UpdateUser" payload
    Then  Post request Response code should be 200
    And Post response should have attributes
      |     name     |
      |  job         |
      | updatedAt    |

  Scenario: Verify updating user with PATCH
    Given I sent a PATCH request to "https://reqres.in/api/users/2" with "UpdateUser" payload
    Then  Post request Response code should be 200
    And Post response should have attributes
      |     name     |
      |  job         |
      | updatedAt    |
