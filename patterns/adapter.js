/**
 * Pattern: Adapter
 *
 * Problem:
 *  You integrate a third-party or legacy API whose interface is different
 *  from how you want the rest of your app to call it.
 *
 * Solution:
 *  Wrap the external API in an "adapter" that exposes a clean, consistent
 *  interface, translating calls and data formats as needed.
 *
 * When to use:
 *  - Swapping analytics/payment/email providers
 *  - Normalizing multiple APIs behind one unified interface
 */

// Pretend this is a third-party analytics SDK with a weird API.
const weirdAnalyticsSdk = {
  sendEvent(payload) {
    console.log("[3rd Party] Sending event:", payload);
  },
  identifyUser(details) {
    console.log("[3rd Party] Identifying user:", details);
  },
};

// Our adapter
export const analytics = {
  track(eventName, properties = {}) {
    weirdAnalyticsSdk.sendEvent({
      event_name: eventName,
      payload: properties,
      timestamp: Date.now(),
    });
  },

  identify(id, traits = {}) {
    weirdAnalyticsSdk.identifyUser({
      user_id: id,
      attributes: traits,
    });
  },
};

// Example usage:
function demoAdapter() {
  analytics.identify("user_123", { email: "user@example.com" });
  analytics.track("SIGNUP_COMPLETED", { plan: "PRO" });
}

// demoAdapter();
