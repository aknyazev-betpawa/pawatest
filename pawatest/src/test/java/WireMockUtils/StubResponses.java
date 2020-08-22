package WireMockUtils;

public class StubResponses {
    public static String postPayoutResponse = "{\n" +
            "  \"created\": \"2020-02-21T17:32:29Z\",\n" +
            "  \"status\": \"ACCEPTED\",\n" +
            "  \"rejectionReason\": {\n" +
            "    \"rejectionReason\": \"PAYOUTS_NOT_ALLOWED\",\n" +
            "    \"rejectionMessage\": \"You don't have access to this correspondent\"\n" +
            "  }\n" +
            "}";

    public static  String getPayoutResponse = "[\n" +
            "  {\n" +
            "    \"created\": \"2020-02-21T17:32:29Z\",\n" +
            "    \"amount\": \"15.21\",\n" +
            "    \"currency\": \"ZMW\",\n" +
            "    \"recipient\": {\n" +
            "      \"type\": \"MSISDN\",\n" +
            "      \"address\": {\n" +
            "        \"value\": 256780334452\n" +
            "      }\n" +
            "    },\n" +
            "    \"correspondent\": \"MTN_MOMO_ZMB\",\n" +
            "    \"country\": \"ZMB\",\n" +
            "    \"payoutId\": \"f4401bd2-1568-4140-bf2d-eb77d2b2b639\",\n" +
            "    \"statementDescription\": \"Payout #123\",\n" +
            "    \"customerTimestamp\": \"2020-02-21T17:32:28Z\",\n" +
            "    \"receivedByRecipient\": \"2020-02-21T17:32:30Z\",\n" +
            "    \"correspondentIds\": {\n" +
            "      \"MTN_INIT\": \"ABC123\",\n" +
            "      \"MTN_FINAL\": \"DEF456\"\n" +
            "    },\n" +
            "    \"status\": \"ACCEPTED\",\n" +
            "    \"failureReason\": {\n" +
            "      \"failureReason\": \"OTHER_ERROR\",\n" +
            "      \"failureMessage\": \"Recipient's address is blocked\"\n" +
            "    }\n" +
            "  }\n" +
            "]";
}
