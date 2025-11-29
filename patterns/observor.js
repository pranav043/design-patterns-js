/**
 * Pattern: Observer
 *
 * Problem:
 *  You want parts of your app to react to events (user login, logout,
 *  notifications, data updates) without tightly coupling components together.
 *
 * Solution:
 *  Use a subject/event bus that keeps a list of observers (listeners) and
 *  notifies them when an event occurs.
 *
 * When to use:
 *  - Cross-module communication in frontend apps
 *  - Custom event systems on top of Node/DOM events
 */

class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(eventName, callback) {
    if (!this.listeners[eventName]) this.listeners[eventName] = [];
    this.listeners[eventName].push(callback);

    // Return unsubscribe function
    return () => {
      this.listeners[eventName] = this.listeners[eventName].filter((cb) => cb !== callback);
    };
  }

  emit(eventName, payload) {
    (this.listeners[eventName] || []).forEach((cb) => cb(payload));
  }
}

export const eventBus = new EventBus();

// Example usage:
function demoObserver() {
  const unsubHeader = eventBus.on("user:login", (user) => {
    console.log("[Header] Update avatar for:", user.name);
  });

  eventBus.on("user:login", (user) => {
    console.log("[Analytics] Track login for:", user.id);
  });

  // Simulate login event:
  const user = { id: 1, name: "Pranav" };
  eventBus.emit("user:login", user);

  unsubHeader(); // stop header from listening
}

// demoObserver();
