/**
 * Pattern: Decorator
 *
 * Problem:
 *  You want to add cross-cutting behavior (logging, caching, retry, metrics)
 *  to existing functions without modifying their original code.
 *
 * Solution:
 *  Wrap the original function in another function that performs extra work
 *  before and/or after calling it.
 *
 * When to use:
 *  - Logging every call to a service
 *  - Adding retry/caching logic around API calls
 */

export function withLogging(fn, name = fn.name) {
  return async function (...args) {
    console.log(`[${name}] called with`, args);
    const start = Date.now();
    try {
      const result = await fn.apply(this, args);
      console.log(`[${name}] succeeded in ${Date.now() - start}ms`);
      return result;
    } catch (error) {
      console.error(`[${name}] failed in ${Date.now() - start}ms`, error);
      throw error;
    }
  };
}

// Example "service" function:
async function fetchUser(userId) {
  await new Promise((res) => setTimeout(res, 200)); // simulate network delay
  return { id: userId, name: "Sample User" };
}

// Decorated version:
export const fetchUserWithLogging = withLogging(fetchUser, "fetchUser");

// Example usage:
async function demoDecorator() {
  const user = await fetchUserWithLogging(1);
  console.log("User:", user);
}

// demoDecorator();
