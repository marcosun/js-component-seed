# js-component-seed

## Definition

In the following, I will refer js-component-seed as This Project, and project that follows my recommended procedure of building and publishing as Package.

## Purpose

I create this project to demonstrate one way of publishing a testable javascript package that can be shared across our community.

## Why & How

Knowing the fact that nearly every single commercial and open-source software around the world are built upon a vast amount of dependencies, dependency package maintainers are responsible for the compatibility, maintainability, and robustness of their work, which is not an easy one to achieve. This project helps to build compatible, maintainable, and testable packages by imposing the following noticeable methods and third-party dependencies.

- Babel -> Javascript compiler.
- JsDoc -> Code documentation.
- EsLint -> Linting utility.
- Jest -> Test framework.

## Output

You may find the followings in build directory.
- ES5 with CommonJs modules can be accessed via index.js.
- ES5 with ES modules can be accessed via index.es.js. (Strongly recommend for the sake of tree shaking)
- ES6 with ES modules can be accessed via es/index.js.