Feature:
  As an api User
  I want to test Payout Api calls
  So that i can make sure Api works as expected

  Scenario: Setup WireMock
    Given WireMock setup is completed

  Scenario: Post a payout
    Given I sent a POST request to payouts api "http://localhost:8092/payouts"  with payload
    Then Payout api Response code should be 201
    And Post response should have postPayoutResponse

  Scenario: Get payout status
    Given I sent a GET request to payouts api "http://localhost:8092/payouts/f4401bd2-1568-4140-bf2d-eb77d2b2b639"
    Then Payout api Response code should be 200
    And Get payout response should be same as stubbed response
