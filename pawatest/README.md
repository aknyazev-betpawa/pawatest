## NOTES

- Added test for given task by creating a wiremock server
- Also added few more tests for a real test api `https://reqres.in/`


##Running Tests
- run `mvn clean` and `mvn install` from project root to build project
- To run tests from IDE right click on TestRunner file and select 'Run tests'
- To run tests from command line navigate to project root in command prompt and run 'mvn test'. 

##Test Results

- html test report will be created in `report` folder under root

##Frame work

- framework created using rest-assured and cucumber jvm in BDD format
- feature files are created in src/test/features
- stepdefinitions are added in src/test/stepdefs
- wiremock utils are added in  src/test/WireMockUtils
