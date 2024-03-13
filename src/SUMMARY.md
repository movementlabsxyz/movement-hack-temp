# The Rust Programming Language
[Introduction](experiment-intro.md)
<!--
[The Rust Programming Language](title-page.md)
[Foreword](foreword.md)
[Introduction](ch00-00-introduction.md)
-->

## Getting started

- [History of Move](ch01-00-history-of-move.md)
    - [The Language for Digital Assets](ch01-01-the-language.md)
    - [The Dispersion of Move](ch01-02-dispersion-of-move.md)
    - [Enter the Movement](ch01-03-enter-movement.md)

- [Getting Started with Move](ch02-00-getting-started-with-move.md)
    - [Advantages of Move](ch02-01-advantages-of-move.md)
    - [Install Movement CLI](ch02-02-install-movement-cli.md)
    - [Hello, Move!](ch02-03-hello-move.md)

- [Planning Your Capstone Project](ch03-00-domain-modeling.md)
    - [Capstone Project Overview](ch03-01-capstone-project-overview.md)
    - [User Story](ch03-02-user-story.md)
    - [Architectural Diagram](ch03-03-architectural-diagram.md)

- [Basic Move Syntax](ch04-00-basic-move-syntax.md)
    - [Primitive Types](ch04-01-primitive-types.md)
    - [Comments](ch04-02-comments.md)
    - [Expressions and Scope](ch04-03-expressions-and-scope.md)
    - [Control Flow](ch04-04-control-flow.md)
    - [Modules and Imports](ch04-05-modules-and-imports.md)

- [Custom types and generics](ch05-00-custom-types-and-generics.md)
    - [Custom Types](ch05-01-custom-types.md)
    - [Getter Functions](ch05-02-getter-functions.md)
    - [Generics Introduction](ch05-03-generics-intro.md)
    - [Generics to Constrain Abilities](ch05-04-generics-abilities.md)
    - [Generics with Multiple Type Parameters](ch05-05-generics-with-multiple-types.md)

- [Move's Storage Model](ch06-00-storage-model.md)
    - [Ownership and References](ch06-01-ownership-and-references.md)
    - [Resources](ch06-02-resources.md)
    - [Collections](ch06-03-collections.md)
    - [Resource Applications](ch06-04-resource-applications.md)

- [Common Collections](ch08-00-common-collections.md)
    - [Storing Lists of Values with Vectors](ch08-01-vectors.md)
    - [Storing UTF-8 Encoded Text with Strings](ch08-02-strings.md)
    - [Storing Keys with Associated Values in Hash Maps](ch08-03-hash-maps.md)
    - [Ownership Inventory #2](ch08-04-inventory.md)

- [Error Handling](ch09-00-error-handling.md)
    - [Unrecoverable Errors with `panic!`](ch09-01-unrecoverable-errors-with-panic.md)
    - [Recoverable Errors with `Result`](ch09-02-recoverable-errors-with-result.md)
    - [To `panic!` or Not to `panic!`](ch09-03-to-panic-or-not-to-panic.md)

- [Generic Types, Traits, and Lifetimes](ch10-00-generics.md)
    - [Generic Data Types](ch10-01-syntax.md)
    - [Traits: Defining Shared Behavior](ch10-02-traits.md)
    - [Validating References with Lifetimes](ch10-03-lifetime-syntax.md)
    - [Ownership Inventory #3](ch10-04-inventory.md)

- [Writing Automated Tests](ch11-00-testing.md)
    - [How to Write Tests](ch11-01-writing-tests.md)
    - [Controlling How Tests Are Run](ch11-02-running-tests.md)
    - [Test Organization](ch11-03-test-organization.md)

- [An I/O Project: Building a Command Line Program](ch12-00-an-io-project.md)
    - [Accepting Command Line Arguments](ch12-01-accepting-command-line-arguments.md)
    - [Reading a File](ch12-02-reading-a-file.md)
    - [Refactoring to Improve Modularity and Error Handling](ch12-03-improving-error-handling-and-modularity.md)
    - [Developing the Library’s Functionality with Test Driven Development](ch12-04-testing-the-librarys-functionality.md)
    - [Working with Environment Variables](ch12-05-working-with-environment-variables.md)
    - [Writing Error Messages to Standard Error Instead of Standard Output](ch12-06-writing-to-stderr-instead-of-stdout.md)

## Thinking in Rust

- [Functional Language Features: Iterators and Closures](ch13-00-functional-features.md)
    - [Closures: Anonymous Functions that Capture Their Environment](ch13-01-closures.md)
    - [Processing a Series of Items with Iterators](ch13-02-iterators.md)
    - [Improving Our I/O Project](ch13-03-improving-our-io-project.md)
    - [Comparing Performance: Loops vs. Iterators](ch13-04-performance.md)

- [More about Cargo and Crates.io](ch14-00-more-about-cargo.md)
    - [Customizing Builds with Release Profiles](ch14-01-release-profiles.md)
    - [Publishing a Crate to Crates.io](ch14-02-publishing-to-crates-io.md)
    - [Cargo Workspaces](ch14-03-cargo-workspaces.md)
    - [Installing Binaries from Crates.io with `cargo install`](ch14-04-installing-binaries.md)
    - [Extending Cargo with Custom Commands](ch14-05-extending-cargo.md)

- [Smart Pointers](ch15-00-smart-pointers.md)
    - [Using `Box<T>` to Point to Data on the Heap](ch15-01-box.md)
    - [Treating Smart Pointers Like Regular References with the `Deref` Trait](ch15-02-deref.md)
    - [Running Code on Cleanup with the `Drop` Trait](ch15-03-drop.md)
    - [`Rc<T>`, the Reference Counted Smart Pointer](ch15-04-rc.md)
    - [`RefCell<T>` and the Interior Mutability Pattern](ch15-05-interior-mutability.md)
    - [Reference Cycles Can Leak Memory](ch15-06-reference-cycles.md)

- [Fearless Concurrency](ch16-00-concurrency.md)
    - [Using Threads to Run Code Simultaneously](ch16-01-threads.md)
    - [Using Message Passing to Transfer Data Between Threads](ch16-02-message-passing.md)
    - [Shared-State Concurrency](ch16-03-shared-state.md)
    - [Extensible Concurrency with the `Sync` and `Send` Traits](ch16-04-extensible-concurrency-sync-and-send.md)

- [Object Oriented Programming Features of Rust](ch17-00-oop.md)
    - [Characteristics of Object-Oriented Languages](ch17-01-what-is-oo.md)
    - [Using Trait Objects That Allow for Values of Different Types](ch17-02-trait-objects.md)
    - [Implementing an Object-Oriented Design Pattern](ch17-03-oo-design-patterns.md)
    - [Ownership Inventory #4](ch17-04-inventory.md)
    - [Design Trade-offs](ch17-05-design-challenge.md)

## Advanced Topics

- [Patterns and Matching](ch18-00-patterns.md)
    - [All the Places Patterns Can Be Used](ch18-01-all-the-places-for-patterns.md)
    - [Refutability: Whether a Pattern Might Fail to Match](ch18-02-refutability.md)
    - [Pattern Syntax](ch18-03-pattern-syntax.md)

- [Advanced Features](ch19-00-advanced-features.md)
    - [Unsafe Rust](ch19-01-unsafe-rust.md)
    - [Advanced Traits](ch19-03-advanced-traits.md)
    - [Advanced Types](ch19-04-advanced-types.md)
    - [Advanced Functions and Closures](ch19-05-advanced-functions-and-closures.md)
    - [Macros](ch19-06-macros.md)

- [Final Project: Building a Multithreaded Web Server](ch20-00-final-project-a-web-server.md)
    - [Building a Single-Threaded Web Server](ch20-01-single-threaded.md)
    - [Turning Our Single-Threaded Server into a Multithreaded Server](ch20-02-multithreaded.md)
    - [Graceful Shutdown and Cleanup](ch20-03-graceful-shutdown-and-cleanup.md)

- [End of Experiment](end-of-experiment.md)

- [Appendix](appendix-00.md)
    - [A - Keywords](appendix-01-keywords.md)
    - [B - Operators and Symbols](appendix-02-operators.md)
    - [C - Derivable Traits](appendix-03-derivable-traits.md)
    - [D - Useful Development Tools](appendix-04-useful-development-tools.md)
    - [E - Editions](appendix-05-editions.md)
    - [F - Translations of the Book](appendix-06-translation.md)
    - [G - How Rust is Made and “Nightly Rust”](appendix-07-nightly-rust.md)
