/**
 * Pattern: Prototype
 *
 * Problem:
 *  You want to create new objects that are based on an existing "template"
 *  object, optionally overriding some properties.
 *
 * Solution:
 *  Use an existing object as a prototype and clone it to create new objects,
 *  instead of instantiating from scratch every time.
 *
 * When to use:
 *  - You have many similar objects with small differences
 *  - You want to avoid repeating the same initialization logic
 */

const baseNotificationTemplate = {
  channel: "email",
  sender: "noreply@myapp.com",
  subject: "Notification",
  body: "Hello, this is a notification.",
};

function createNotification(overrides = {}) {
  // Using prototype-style cloning
  const cloned = Object.create(baseNotificationTemplate);
  return Object.assign(cloned, overrides);
}

// Example usage:
function demoPrototype() {
  const welcomeEmail = createNotification({
    subject: "Welcome to MyApp!",
    body: "Thanks for signing up.",
  });

  const passwordResetEmail = createNotification({
    subject: "Reset your password",
    body: "Click this link to reset your password.",
  });

  console.log(welcomeEmail);
  console.log(passwordResetEmail);
}

// demoPrototype();
