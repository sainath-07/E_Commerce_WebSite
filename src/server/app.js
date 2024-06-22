const express = require("express");
const app = express();
const cors = require("cors");

// Secret key
const stripe = require("stripe")("sk_test_51PRvHkRrscabj2MuuEBUCvwxU7pDs5ynqhvG2xoXfMkx3Xsg9A60gW1v0EJCVLN8ILBn9WD0woH8ekirs9mqORLy00WWqimyX7"); // <-- Single instance created here

app.use(express.json());
app.use(cors());

// Checkout
app.post("/api/create-checkout-session", async (req, res) => {
    const { cardProducts } = req.body;
    console.log(cardProducts);

    const data = cardProducts.map((product) => ({
        price_data: {
            currency: "inr", 
            product_data: {
                name: product.productType
            },
            unit_amount: product.price * 100,
        },
        quantity: product.count,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: data,
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(7000, () => {
    console.log("server start");
});
