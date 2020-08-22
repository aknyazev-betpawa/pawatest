package utils;

public class PayLoad {

    public static String GetPayLoad(String action) {
        
        String payload;
        
        switch (action) {
            case "AddUser" :
                payload =  "{\n" +
                        "    \"name\": \"morpheus\",\n" +
                        "    \"job\": \"leader\"\n" +
                        "}";
                break;

            case "UpdateUser":
                payload = "{\n" +
                        "    \"name\": \"morpheus\",\n" +
                        "    \"job\": \"zion resident\"\n" +
                        "}";
                break;
            default:
                throw new IllegalStateException("Unexpected value: " + action);
        }

        return  payload;
    }


}
