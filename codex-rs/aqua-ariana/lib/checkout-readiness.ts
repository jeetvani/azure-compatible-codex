// This draft has no transaction endpoint. No cart, storage or client flag can authorize payment.
// Replace only with an authoritative server order/payment implementation, never a public toggle.
export function getCheckoutReadiness() {
  return { canCheckout: false, canPay: false, payableTotal: null, paymentConnected: false } as const;
}
export const checkoutRequirements = [
  ["Catalog and prices", "To be confirmed"],
  ["Currency and taxes", "To be confirmed"],
  ["Pickup address/hours/instructions", "To be confirmed"],
  ["Order readiness process", "To be confirmed"],
  ["Cancellation/refund and privacy terms", "To be confirmed"],
  ["Payment connection", "Not connected"],
] as const;
