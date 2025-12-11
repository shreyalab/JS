# JavaScript Execution Context Notes

1.  **Everything in JavaScript happens inside an execution context.**

2.  **JavaScript is a single‑threaded, synchronous language.**

3.  **Execution context has 2 parts:**

    - **a. Memory Block (Variable Environment)**\
      Stores variables and functions.
    - **b. Code Block (Thread of Execution)**\
      Stores code and executes each line one after another, moving to
      the next only after the previous is completed.

# JavaScript Execution Context (EC)

EC is created in **two phases**:

---

## 1. Memory Creation Phase (MCP)

- JavaScript reads the code **line by line**.
- Memory is **allocated to variables and functions**.
- Functions are stored with their full definitions.
- Variables are allocated as `undefined`.

---

## 2. Code Execution Phase (CEP)

- All functions and code stored during MCP are **executed in this phase**.
- Values are assigned to variables.
- Execution happens in order.

---

## Call Stack

JavaScript manages the Execution Context using a **Call Stack**, where:

- The **Global Execution Context (GEC)** is created first.
- Every function call creates a **new EC** that is pushed onto the stack.
- When the function finishes, its EC is popped off.
