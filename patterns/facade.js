/**
 * Pattern: Facade
 *
 * Problem:
 *  You have multiple subsystems (payment, inventory, email, logging) and
 *  calling them directly from everywhere makes the code messy and coupled.
 *
 * Solution:
 *  Provide a "facade" object with simple high-level methods that orchestrate
 *  calls to the underlying systems.
 *
 * When to use:
 *  - Complex workflows involving many services
 *  - Provide a simpler API for common operations
 */

// Subsystems (greatly simplified)
const PaymentService = {
  charge(userId, amount) {
    console.log(`[Payment] Charging user ${userId} ₹${amount}`);
  },
};

const InventoryService = {
  reserveItems(items) {
    console.log("[Inventory] Reserving items:", items);
  },
};

const EmailService = {
  sendOrderConfirmation(email, orderId) {
    console.log(`[Email] Sending confirmation to ${email} for order ${orderId}`);
  },
};

// Facade
export const OrderFacade = {
  placeOrder({ userId, email, items, totalAmount }) {
    InventoryService.reserveItems(items);
    PaymentService.charge(userId, totalAmount);
    const orderId = Math.floor(Math.random() * 100000);
    EmailService.sendOrderConfirmation(email, orderId);
    console.log("[OrderFacade] Order placed with id:", orderId);
    return orderId;
  },
};

// Example usage:
function demoFacade() {
  const orderId = OrderFacade.placeOrder({
    userId: "user_123",
    email: "user@example.com",
    items: [{ sku: "ABC", qty: 2 }],
    totalAmount: 1999,
  });
  console.log("Final order id:", orderId);
}

// demoFacade();
