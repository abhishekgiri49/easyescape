import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { TripService } from "../../../../../repositories";
const stripePromise = loadStripe(
  "pk_test_51Oqm4TIkXtr50PnO7IIm7uVL9rCgHKJzAUfHA1Sm3KMD60CzuWo9BAK6rVsMiqShSL0eYpeU9n3jUEfrCr1669du00RdvrLtyK"
);

const Paynow = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [formData, setFormData] = useState({
    amount: 10000,
  });
  useEffect(() => {
    fetchClientSecret();
  }, []);
  const fetchClientSecret = async () => {
    TripService.createCheckoutSession(formData)
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.error("Error fetching package details:", error);
      });
  };
  return (
    <>
      {/* <button onClick={fetchClientSecret}>Pay Now</button> */}
      <div id="checkout">
        {clientSecret && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </div>
    </>
  );
};
export default Paynow;
