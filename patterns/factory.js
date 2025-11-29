/**
 * Pattern: Factory Method
 *
 * Problem:
 *  You have a generic workflow (e.g., processing a payment), but you want
 *  the creation of specific objects (Stripe, PayPal, etc.) to be decided
 *  by subclasses or different implementations, not by big if/else blocks.
 *
 * Solution:
 *  Put the object-creation logic in a "factory method" on a base class.
 *  Subclasses override this method to create the right concrete object.
 *
 * When to use:
 *  - You have a common process, but parts of it depend on the concrete type.
 *  - You want to add new variants without touching the main workflow.
 */

class PaymentGateway {
  pay(amount) {
    throw new Error("pay() must be implemented by subclass");
  }
}

class StripeGateway extends PaymentGateway {
  pay(amount) {
    console.log(`[Stripe] Charging ₹${amount}...`);
  }
}

class PaypalGateway extends PaymentGateway {
  pay(amount) {
    console.log(`[PayPal] Charging ₹${amount}...`);
  }
}

class PaymentProcessor {
  // Factory method to be overridden
  createGateway() {
    throw new Error("createGateway() must be implemented");
  }

  process(amount) {
    const gateway = this.createGateway();
    gateway.pay(amount);
  }
}

class StripePaymentProcessor extends PaymentProcessor {
  createGateway() {
    return new StripeGateway();
  }
}

class PaypalPaymentProcessor extends PaymentProcessor {
  createGateway() {
    return new PaypalGateway();
  }
}

// Example usage:
function demoFactoryMethod() {
  const stripeProcessor = new StripePaymentProcessor();
  const paypalProcessor = new PaypalPaymentProcessor();

  stripeProcessor.process(999);
  paypalProcessor.process(1499);
}

// demoFactoryMethod();
