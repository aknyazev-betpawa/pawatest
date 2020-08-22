package stepdefs;

import com.github.tomakehurst.wiremock.WireMockServer;
import cucumber.api.java8.En;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import WireMockUtils.WireMockUtils;
import WireMockUtils.StubResponses;
import WireMockUtils.StubPayloads;
import org.junit.Assert;


public class PayoutsSteps implements En {

    WireMockServer wireMockServer;
    Response response;

    public PayoutsSteps() {

        Given("^WireMock setup is completed$", () -> {
            wireMockServer = new WireMockServer(8092);
            wireMockServer.start();
            WireMockUtils.SetupStubs();
        });
        Given("^I sent a POST request to payouts api \"([^\"]*)\"  with payload$", (String url) -> {
            String inputPayLoad = StubPayloads.payOutPayload;
            response = RestAssured.given()
                    .body(inputPayLoad)
                    .post(url);
        });
        Then("^Payout api Response code should be (\\d+)$", (Integer statusCode) -> {
            response.then()
                    .statusCode(statusCode);
        });
        And("^Post response should have postPayoutResponse$", () -> {
            String resJson = response.asString();
            Assert.assertEquals(resJson, StubResponses.postPayoutResponse);
        });
        Given("^I sent a GET request to payouts api \"([^\"]*)\"$", (String url) -> {
            response = RestAssured.get(url);
        });
        And("^Get payout response should be same as stubbed response$", () -> {
            String resJson = response.asString();
            Assert.assertEquals(resJson, StubResponses.getPayoutResponse);
        });


    }
}
