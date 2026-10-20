// Confirmed facts only. Unknown business facts remain null.
export const business = {
  name: "Aqua Ariana", product: "Bottled drinking water",
  city: "San Francisco", region: "California", country: "USA", fulfillment: "pickup",
  address: null, hours: null, instructions: null, readinessProcess: null,
  currency: null, taxes: null, minimumOrder: null, bulkTiers: null,
  cancellationRefundTerms: null, privacyTerms: null, paymentProvider: null,
} as const;
export const draftCopy = {
  hero: "Aqua Ariana sells bottled drinking water for offices, events, restaurants and shops. Explore the ordering information below and plan for pickup in San Francisco.",
  catalog: "Product sizes, selling units and prices will be shown here once confirmed. Online ordering is not available yet.",
};
