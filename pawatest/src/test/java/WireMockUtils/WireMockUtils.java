package WireMockUtils;
import static com.github.tomakehurst.wiremock.client.WireMock.*;

public class WireMockUtils {

    public static void SetupStubs() {
        configureFor("127.0.0.1", 8092);
        stubFor(post(urlEqualTo("/payouts"))
                .willReturn(aResponse().
                        withStatus(201).
                        withHeader("Content-Type", "application/json").
                        withBody(StubResponses.postPayoutResponse))
        );

        stubFor(get(urlEqualTo("/payouts/f4401bd2-1568-4140-bf2d-eb77d2b2b639"))
                .willReturn(aResponse().
                        withStatus(200).
                        withHeader("Content-Type", "application/json")
                        .withBody(StubResponses.getPayoutResponse))
        );
    }
}
