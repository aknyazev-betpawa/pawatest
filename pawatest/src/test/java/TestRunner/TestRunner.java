package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(
        plugin={"pretty","html:report"},
        features = {"src/test/java/features"},
        glue = {"stepdefs"},
        tags = {}
)

public class TestRunner {


}
