$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/CreateUser.feature");
formatter.feature({
  "name": "",
  "description": "  As an api User\n  I want to test Api calls\n  So that i can make sure Api works as expected",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify creating user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I sent a POST request to \"https://reqres.in/api/users\" with \"AddUser\" payload",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post request Response code should be 201",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post response should have attributes",
  "rows": [
    {
      "cells": [
        "name"
      ]
    },
    {
      "cells": [
        "job"
      ]
    },
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "createdAt"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify updating user with PUT",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I sent a PUT request to \"https://reqres.in/api/users/2\" with \"UpdateUser\" payload",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post request Response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post response should have attributes",
  "rows": [
    {
      "cells": [
        "name"
      ]
    },
    {
      "cells": [
        "job"
      ]
    },
    {
      "cells": [
        "updatedAt"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify updating user with PATCH",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I sent a PATCH request to \"https://reqres.in/api/users/2\" with \"UpdateUser\" payload",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post request Response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post response should have attributes",
  "rows": [
    {
      "cells": [
        "name"
      ]
    },
    {
      "cells": [
        "job"
      ]
    },
    {
      "cells": [
        "updatedAt"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/java/features/DeleteUser.feature");
formatter.feature({
  "name": "",
  "description": "  As an api User\n  I want to test Api calls\n  So that i can make sure Api works as expected",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify deleting user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I sent a DELETE request to \"https://reqres.in/api/users/2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete request Response code should be 204",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/java/features/GetUsers.feature");
formatter.feature({
  "name": "",
  "description": "  As an api User\n  I want to test Api calls\n  So that i can make sure Api works as expected",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify list users API returning users",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I sent a GET request to \"https://reqres.in/api/users?page\u003d2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users count should be 6",
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users should have attributes",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "email"
      ]
    },
    {
      "cells": [
        "first_name"
      ]
    },
    {
      "cells": [
        "last_name"
      ]
    },
    {
      "cells": [
        "avatar"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response time should be less than 1 second",
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify get single user api returning user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I sent a GET request to \"https://reqres.in/api/users/2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users count should be 1",
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users should have attributes",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "email"
      ]
    },
    {
      "cells": [
        "first_name"
      ]
    },
    {
      "cells": [
        "last_name"
      ]
    },
    {
      "cells": [
        "avatar"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response time should be less than 1 second",
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify invalid user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I sent a GET request to \"https://reqres.in/api/users/23\"",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response code should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/java/features/PawaPayouts.feature");
formatter.feature({
  "name": "",
  "description": "  As an api User\n  I want to test Payout Api calls\n  So that i can make sure Api works as expected",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Setup WireMock",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "WireMock setup is complected",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post a payout",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I sent a POST request to payouts api \"http://localhost:8092/payouts\"  with payload",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Payout api Response code should be 201",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Post response should have postPayoutResponse",
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get payout status",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I sent a GET request to payouts api \"http://localhost:8092/payouts/f4401bd2-1568-4140-bf2d-eb77d2b2b639\"",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Payout api Response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get payout response should be same as stubbed response",
  "keyword": "And "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
});