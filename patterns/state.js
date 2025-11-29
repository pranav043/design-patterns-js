/**
 * Pattern: State
 *
 * Problem:
 *  An object behaves differently based on its internal state, leading to
 *  lots of if/else or switch statements scattered everywhere.
 *
 * Solution:
 *  Represent each state as a separate object with its own behavior,
 *  and delegate behavior to the current state.
 *
 * When to use:
 *  - UI flows with states (idle, loading, success, error)
 *  - Workflows, wizards, games, request lifecycles
 */

class IdleState {
  constructor(ctx) {
    this.ctx = ctx;
  }
  fetch() {
    console.log("Fetching...");
    this.ctx.setState(this.ctx.loadingState);
    this.ctx.performFetch();
  }
}

class LoadingState {
  constructor(ctx) {
    this.ctx = ctx;
  }
  fetch() {
    console.log("Already loading. Ignoring extra fetch call.");
  }
  success(data) {
    this.ctx.data = data;
    this.ctx.setState(this.ctx.successState);
  }
  error(err) {
    this.ctx.error = err;
    this.ctx.setState(this.ctx.errorState);
  }
}

class SuccessState {
  constructor(ctx) {
    this.ctx = ctx;
  }
  fetch() {
    console.log("Refetching from success state...");
    this.ctx.setState(this.ctx.loadingState);
    this.ctx.performFetch();
  }
}

class ErrorState {
  constructor(ctx) {
    this.ctx = ctx;
  }
  fetch() {
    console.log("Retrying after error...");
    this.ctx.setState(this.ctx.loadingState);
    this.ctx.performFetch();
  }
}

export class RequestContext {
  constructor(fetchFn) {
    this.fetchFn = fetchFn;
    this.data = null;
    this.error = null;

    this.idleState = new IdleState(this);
    this.loadingState = new LoadingState(this);
    this.successState = new SuccessState(this);
    this.errorState = new ErrorState(this);

    this.state = this.idleState;
  }

  setState(state) {
    this.state = state;
  }

  fetch() {
    this.state.fetch();
  }

  performFetch() {
    this.fetchFn()
      .then((data) => this.state.success?.(data))
      .catch((err) => this.state.error?.(err));
  }
}

// Example usage:
function fakeApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 70% chance of success
      if (Math.random() < 0.7) resolve({ message: "OK" });
      else reject(new Error("Random failure"));
    }, 200);
  });
}

function demoState() {
  const request = new RequestContext(fakeApi);
  request.fetch();

  // After some time you could call request.fetch() again to refetch/ retry
}

// demoState();
