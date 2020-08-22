package stepdefs;

import cucumber.api.DataTable;
import cucumber.api.java8.En;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import utils.PayLoad;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class CreateUser implements En {

    Map<String, String> user;
    Response response;
    public CreateUser() {
        Given("^I sent a POST request to \"([^\"]*)\" with \"([^\"]*)\" payload$", (String url, String payload) -> {

            String inputPayLoad = PayLoad.GetPayLoad(payload);
            response = RestAssured.given()
                    .contentType(ContentType.JSON)
                    .body(inputPayLoad)
                    .post(url);
            String resJson = response.asString();
            user  = JsonPath.from(resJson).get("$");


        });
        Then("^Post request Response code should be (\\d+)$", (Integer statusCode) -> {
            response.then()
                    .statusCode(statusCode);
        });
        And("^Post response should have attributes$", (DataTable attributeKeys) -> {
            List<String> attributes = attributeKeys.asList(String.class);
            List<String> keys = new ArrayList<>(user.keySet());
            for (String key: keys
            ) {
                Assert.assertTrue(attributes.contains(key));
            }
        });
        Given("^I sent a PATCH request to \"([^\"]*)\" with \"([^\"]*)\" payload$", (String url, String payload) -> {
            String inputPayLoad = PayLoad.GetPayLoad(payload);
            response = RestAssured.given()
                    .contentType(ContentType.JSON)
                    .body(inputPayLoad)
                    .patch(url);
            String resJson = response.asString();
            user  = JsonPath.from(resJson).get("$");
        });
        Given("^I sent a PUT request to \"([^\"]*)\" with \"([^\"]*)\" payload$", (String url, String payload) -> {

            String inputPayLoad = PayLoad.GetPayLoad(payload);
            response = RestAssured.given()
                    .contentType(ContentType.JSON)
                    .body(inputPayLoad)
                    .put(url);
            String resJson = response.asString();
            user  = JsonPath.from(resJson).get("$");
        });
    }
}
