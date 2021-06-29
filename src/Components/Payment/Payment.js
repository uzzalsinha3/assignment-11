import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import SplitForm from './SpiltForm';

const stripePromise = loadStripe('pk_test_51J6KX0B0tkW2WLuMzY2LV37voMoX3OtQ50GdDnJ8Zufv0c0rsZy465qkpCZsP19zhkOfwxVeByJfsLBjfgQpQEpk00mvibH4Ug');

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
           
            <SplitForm></SplitForm>
         
        </Elements>
    );
};

export default Payment;