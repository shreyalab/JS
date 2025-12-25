# Hoisting in JavaScript

Hoisting in JavaScript means that **memory is allocated to variables and functions before the code executes**.

Because of this, even before declaring variables or functions, if we try to print them, JavaScript behaves as follows:

---

## Function Hoisting

- Functions are fully hoisted.
- Accessing a function before its declaration will **print the entire function definition**.

```js
console.log(myFunction); // Prints the full function
function myFunction() {
  console.log("Hello!");
}
```

---

## Variable Hoisting (`var`)

- Variables declared with `var` are hoisted but initialized with **`undefined`**.
- Accessing them before declaration prints:

```
undefined
```

```js
console.log(a); // undefined
var a = 10;
```

---

Hoisting occurs during the **Memory Creation Phase** of the JavaScript Execution Context.

-- Will resume from 27-dec
