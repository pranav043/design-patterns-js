/**
 * Pattern: Strategy
 *
 * Problem:
 *  You have multiple ways (algorithms) to perform an operation, such as
 *  calculating discounts, taxes, or scoring, and you want to swap them
 *  easily without big if/else chains.
 *
 * Solution:
 *  Encapsulate each algorithm in its own function/object and choose
 *  the appropriate one at runtime.
 *
 * When to use:
 *  - Multiple variations of business rules (pricing, tax, filters)
 *  - Feature flags or per-tenant behavior
 */

const discountStrategies = {
  PERCENT(amount, value) {
    return amount * (1 - value / 100);
  },
  FLAT(amount, value) {
    return Math.max(0, amount - value);
  },
  NONE(amount) {
    return amount;
  },
};

export function applyDiscount({ amount, type, value }) {
  const strategy = discountStrategies[type] || discountStrategies.NONE;
  return strategy(amount, value);
}

// Example usage:
function demoStrategy() {
  const amount = 1000;
  console.log("10% OFF:", applyDiscount({ amount, type: "PERCENT", value: 10 }));
  console.log("₹200 OFF:", applyDiscount({ amount, type: "FLAT", value: 200 }));
  console.log("No coupon:", applyDiscount({ amount, type: "UNKNOWN", value: 0 }));
}

// demoStrategy();
