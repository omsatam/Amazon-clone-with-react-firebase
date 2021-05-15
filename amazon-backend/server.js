const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51IquOoSAziSToEMGYNTf2bLGBw7xBBnn0A6p5hT9WUHe3vF3JOSqpOGNDoHA9TnG7Q3ZuAr66obHLSuLEJT0xOZt0013awdA87"
);

//API

//App config
const app = express();
const port = process.env.PORT || 9000;

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
