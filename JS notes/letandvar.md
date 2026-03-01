# JavaScript Core Concepts -- Interview Ready Notes

## 1. var, let, const and Global Object

-   When `var` is declared in the **global scope**, it becomes a
    property of the global object (`window` in browsers).
-   `let` and `const` are hoisted and allocated memory, but:
    -   They are **not attached to the global object**
    -   They exist in a separate **script scope**
    -   They cannot be accessed before declaration due to the **Temporal
        Dead Zone (TDZ)**

Example:

var a = 10; let b = 20;

console.log(window.a); // 10 console.log(window.b); // undefined

------------------------------------------------------------------------

## 2. Temporal Dead Zone (TDZ)

The Temporal Dead Zone is the time between entering a scope and the
actual declaration line of a `let` or `const` variable, during which the
variable exists but cannot be accessed.

Accessing it during TDZ throws a **ReferenceError**.

------------------------------------------------------------------------

## 3. Redeclaration Rules

-   `var` can be redeclared in the same scope.
-   `let` and `const` cannot be redeclared in the same scope.

var a = 10; var a = 20; // allowed

let b = 10; let b = 20; // SyntaxError

------------------------------------------------------------------------

## 4. Error Types

### ReferenceError

Occurs when: - A variable is not declared - OR is out of scope - OR is
accessed inside the TDZ

### SyntaxError

Occurs when: - Code violates JavaScript grammar rules - Redeclaring
`let/const` in same scope - Missing brackets - Invalid syntax structure

### TypeError

Occurs when: - An operation is performed on a value of the wrong type -
OR when modifying something that cannot be modified

const a = 10; a = 20; // TypeError

------------------------------------------------------------------------

## 5. Block and Block Scope

### Block

A block (compound statement) is a group of multiple JavaScript
statements enclosed in `{}` that can be used where JavaScript expects a
single statement.

### Block Scope

Block scope means variables and functions declared inside a block `{}`
are accessible only within that block.

Block scope applies to: - `let` - `const` - class declarations

------------------------------------------------------------------------

## 6. Shadowing

Shadowing occurs when a variable declared in an inner scope has the same
name as a variable in an outer scope, causing the inner variable to hide
the outer one.

Example:

let a = 10;

{ let a = 20; console.log(a); // 20 }

console.log(a); // 10

------------------------------------------------------------------------

## 7. Function Shadowing

function test() { console.log("Outer"); }

{ function test() { console.log("Inner"); }

test(); // Inner }

test(); // Outer

------------------------------------------------------------------------

## 8. Lexical Scope

JavaScript uses lexical scoping, meaning scope is determined by where
variables are written in the code.

When accessing a variable, JavaScript searches in this order:

1.  Current scope
2.  Outer scope
3.  Global scope

If found, search stops.

------------------------------------------------------------------------

## 9. Illegal Shadowing

Illegal shadowing occurs when a `var` declaration attempts to redeclare
a `let` or `const` variable in a way that places both in the same scope.

let a = 10;

{ var a = 20; // SyntaxError }

Reason: - `var` ignores block scope - It tries to redeclare `a` in
global scope - But `let a` already exists there

------------------------------------------------------------------------

## 10. Legal Shadowing

var a = 10;

{ let a = 20; // Allowed }

Reason: - `var a` exists in global scope - `let a` exists in block
scope - They belong to different lexical environments
