import React from 'react';
import TitlePage from '../../components/UI/Title/TitlePage';
import { loadStripe } from "@stripe/stripe-js";
import stripeService from "../../services/stripe.service";

const stripePromise = loadStripe("pk_test_2Ii2i2VuUc2rHExheuZnAChu002krOc8Fp");

const Index = () => {

    const handleConfirmation = async () => {
        try {
          const stripe = await stripePromise;
          const response = await stripeService.createSession();
          await stripe.redirectToCheckout({
            sessionId: response.id,
          });
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div>
            <TitlePage title="Panier" />
            <div className="text-center">
                <button className="btn btn-black" onClick={handleConfirmation}>Payer</button>
            </div>
        </div>
    );
}

export default Index;