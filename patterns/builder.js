/**
 * Pattern: Builder
 *
 * Problem:
 *  You need to create complex objects with many optional fields
 *  (e.g., building a user profile, an HTTP request, or a report).
 *
 * Solution:
 *  Provide a builder with chainable methods to gradually construct the object,
 *  then a final build() method to produce the result.
 *
 * When to use:
 *  - Complex objects with many optional properties
 *  - Avoid long constructors or "options" objects that are hard to read
 */

class UserProfileBuilder {
  constructor() {
    this.profile = {};
  }

  setId(id) {
    this.profile.id = id;
    return this;
  }

  setName(name) {
    this.profile.name = name;
    return this;
  }

  setEmail(email) {
    this.profile.email = email;
    return this;
  }

  setPreferences(preferences) {
    this.profile.preferences = preferences;
    return this;
  }

  setAddress(address) {
    this.profile.address = address;
    return this;
  }

  build() {
    // Basic validation example
    if (!this.profile.id || !this.profile.email) {
      throw new Error("User must have at least id and email");
    }
    return Object.freeze({ ...this.profile });
  }
}

// Example usage:
function demoBuilder() {
  const profile = new UserProfileBuilder()
    .setId("user_123")
    .setName("Pranav")
    .setEmail("pranav@example.com")
    .setPreferences({ theme: "dark", language: "en" })
    .build();

  console.log(profile);
}

// demoBuilder();
