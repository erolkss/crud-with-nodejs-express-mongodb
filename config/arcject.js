import arcjet, {shield, detectBot, tokenBucket} from "@arcjet/node";
import {ARCJET_ENV, ARCJET_KEY} from "./env.js";

const aj = arcjet({
    key: ARCJET_KEY,
    env: ARCJET_ENV,
    characteristics: ["ip.src"],
    rules: [
        shield({mode: "LIVE"}),
        detectBot({
            mode: "LIVE",
            allow: ["POSTMAN",
                "CATEGORY:SEARCH_ENGINE",
            ],
        }),

        tokenBucket({
            mode: "LIVE",
            refillRate: 5,
            interval: 10,
            capacity: 10,
        }),
    ],
});

export default aj;
