/**
 * Pattern: State
 *
 * Problem:
 *   Handling async request states often leads to messy if/else logic:
 *   if (status === 'loading') ..., if (status === 'error') ...
 *
 * Solution:
 *   Use a small state machine: state + event → newState.
 *   Everything is in one place, no repeated checks.
 *
 * When to use:
 *   - Idle/Loading/Success/Error UIs
 *   - Fetch states in React/Node
 *   - Any logic with repeated status checks
 */

const initialState = { status: "idle", data: null, error: null };

function transition(state, event) {
  switch (event.type) {
    case "FETCH":
      return { status: "loading", data: null, error: null };
    case "SUCCESS":
      return { status: "success", data: event.data, error: null };
    case "ERROR":
      return { status: "error", data: null, error: event.error };
    default:
      return state;
  }
}

export function createRequest(fetchFn) {
  let state = { ...initialState };

  async function run() {
    state = transition(state, { type: "FETCH" });
    console.log("STATE:", state);

    try {
      const data = await fetchFn();
      state = transition(state, { type: "SUCCESS", data });
    } catch (error) {
      state = transition(state, { type: "ERROR", error });
    }

    console.log("STATE:", state);
  }

  function getState() {
    return state;
  }

  return { run, getState };
}

// ---------------- Example ----------------

function fakeApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.7 ? resolve({ msg: "Done" }) : reject(new Error("Network error"));
    }, 300);
  });
}

function demo() {
  const req = createRequest(fakeApi);
  req.run(); // idle → loading → success/error
}

demo();
