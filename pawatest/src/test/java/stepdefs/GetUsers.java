package stepdefs;

import cucumber.api.DataTable;
import cucumber.api.java8.En;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import io.restassured.path.json.JsonPath;
import utils.FactoryUtils;

public class GetUsers implements En {
    Response response;
    String resAsJson;
    List<Map<String, String>> users;
    Map<String, String> user;
    Integer UserCount;


    public GetUsers() {
        Given("^I sent a GET request to \"([^\"]*)\"$", (String url) -> {

            response = RestAssured.get(url);
            resAsJson = response.asString();
        });
        Then("^Response code should be (\\d+)$", (Integer statusCode) -> {

            response.then()
                    .statusCode(statusCode);
        });
        And("^Users count should be (\\d+)$", (Integer usersCount) -> {

            UserCount = usersCount;

            if(usersCount>1) {
                users = JsonPath.from(resAsJson).get("data");
                Assert.assertEquals((long)usersCount, users.size());
            }else {
                user  = JsonPath.from(resAsJson).get("data");
            }


        });
        And("^Users should have attributes$", (DataTable attributeKeys) -> {

            List<String> attributes = attributeKeys.asList(String.class);

            if (UserCount>1){
                for (Map<String, String> user:users
                ) {

                    List<String> keys = new ArrayList<>(user.keySet());

                    Assert.assertEquals(attributes.size(), keys.size());

                    for (String key: keys
                    ) {
                        Assert.assertTrue(attributes.contains(key));
                    }

                }
            }else {
                List<String> keys = new ArrayList<>(user.keySet());
                for (String key: keys
                ) {
                    Assert.assertTrue(attributes.contains(key));
                }
            }



        });
        And("^response time should be less than (\\d+) second$", (Integer responseTimeLimit) -> {
          long actualTime =   response.getTimeIn(TimeUnit.SECONDS);
          Assert.assertTrue(actualTime<=responseTimeLimit);
        });

    }
}
