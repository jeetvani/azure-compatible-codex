export type FAQ = { question: string; answer: string; pickupLink?: boolean };
const pickup: FAQ = { question: "Is this a pickup order?", answer: "Yes. Aqua Ariana uses a pickup model in San Francisco. The address, hours and pickup instructions still need to be confirmed.", pickupLink: true };
const payment: FAQ = { question: "Can I pay online now?", answer: "Not yet. Online payment is unavailable while product details, prices, pickup arrangements and the payment connection are being confirmed." };
const refund: FAQ = { question: "What are the cancellation and refund terms?", answer: "Cancellation and refund terms have not been supplied. Verified terms must be available before online payment is enabled." };
export const homeFAQs: FAQ[] = [
 { question: "Which bottle sizes are available?", answer: "Bottle sizes and selling units have not been confirmed for this website. The shop section will list the available options once those details are supplied." }, pickup, payment, refund,
];
export const pickupFAQs: FAQ[] = [pickup, { question: "When will my order be ready?", answer: "The order-readiness process has not been confirmed. This website cannot promise a pickup time or show an order as ready." }, payment, refund];
