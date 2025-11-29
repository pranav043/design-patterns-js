/**
 * Pattern: Singleton
 *
 * Problem:
 *  You need exactly one shared instance of something in your app
 *  (e.g., database client, configuration, logging).
 *
 * Solution:
 *  Create a module that returns the same instance every time it is imported
 *  or accessed, instead of constructing new ones.
 *
 * When to use:
 *  - Expensive objects like DB connections
 *  - Global/shared state that must stay consistent
 */

let instance = null;

class AppConfig {
  constructor() {
    if (instance) {
      return instance;
    }

    this.env = process.env.NODE_ENV || "development";
    this.dbUrl = process.env.DB_URL || "mongodb://localhost:27017/myapp";
    this.featureFlags = {
      newDashboard: true,
    };

    instance = this;
  }
}

export function getConfig() {
  return new AppConfig();
}

// Example usage:
function demoSingleton() {
  const config1 = getConfig();
  const config2 = getConfig();

  console.log(config1 === config2); // true
  console.log(config1.dbUrl);
}

// demoSingleton();
