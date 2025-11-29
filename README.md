# JavaScript Design Patterns

This repo contains JavaScript examples of common design patterns, with a focus on **real-world practical use cases**.

## What are design patterns?

Design patterns are **reusable solutions to common problems in software design**.  
They are not frameworks or libraries. They are **proven ways to structure code** so that it is:

- Easier to understand
- Easier to change and extend
- Less likely to break when you add new features

Once you know the patterns and their names, you can:

- Recognize them in frameworks you already use (React, Express, Redux, etc.)
- Communicate better with other engineers ("let's use Strategy here")
- Design more maintainable code in large codebases

## Why use design patterns in JavaScript?

JavaScript applications (frontend + backend) often grow quickly:

- A single file starts doing too many things
- Conditionals and `if/else` chains explode
- Integrations (APIs, SDKs, third-party services) multiply
- Changing one thing breaks five other things

Patterns help with:

- **Separation of concerns** – each module has a clear responsibility
- **Extensibility** – add new behaviors without rewriting existing code
- **Testability** – logic is isolated in focused objects/functions
- **Consistency** – similar problems get solved in similar ways

## Patterns in this repo

Each pattern is implemented in its own file under `patterns/` and contains:

- A `Problem → Solution → When to use` comment block at the top
- A concise real-world scenario
- A small usage example

### Creational Patterns

- `factory-method.js` – Factory Method Pattern
- `singleton.js` – Singleton Pattern
- `builder.js` – Builder Pattern
- `prototype.js` – Prototype Pattern

### Structural Patterns

- `adapter.js` – Adapter Pattern
- `decorator.js` – Decorator Pattern
- `facade.js` – Facade Pattern

### Behavioral Patterns

- `strategy.js` – Strategy Pattern
- `observer.js` – Observer Pattern
- `state.js` – State Pattern

## How to use this repo

You can:

- Open each file and read the **Problem/Solution/When** comment
- Run the **demo functions** at the bottom by uncommenting them
- Copy patterns into your own codebase and adapt them

This repo is meant to be **educational and practical**, not “pure textbook”.  
Use the patterns where they make your code **simpler and clearer**, not more complicated.
