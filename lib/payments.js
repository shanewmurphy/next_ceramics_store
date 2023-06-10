import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export async function initiateCheckout({ lineItems } = {}) {
  const stripe = await stripePromise;

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    // lineItems: [{ price: products.id, quantity: 1 }],
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });

  // console.log("Checkout");
}
