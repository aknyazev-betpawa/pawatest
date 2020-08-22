package stepdefs;

import cucumber.api.java8.En;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

public class DeleteUser implements En {

    Response response;

    public DeleteUser() {
        Then("^Delete request Response code should be (\\d+)$", (Integer statusCode) -> {
            response.then()
                    .statusCode(statusCode);
        });
        Given("^I sent a DELETE request to \"([^\"]*)\"$", (String url) -> {
            response = RestAssured.given()
                    .delete(url);
        });
    }
}
