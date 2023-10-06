## In this article

- [In this article](#in-this-article)
- [Introduction](#introduction)
- [Why Vitest?](#why-vitest)
- [Setting up the Test Environment](#setting-up-the-test-environment)
- [Testing Component Behavior](#testing-component-behavior)
- [Conclusion](#conclusion)

## Introduction

Unit testing is a crucial practice in software development that involves evaluating individual units of code to ensure they function correctly. It forms an integral part of Test-Driven Development (TDD), a methodical approach that emphasizes continuous testing and revision during the development process. In this article, we will explore how to utilize Vitest, a modern testing framework powered by Vite, to rigorously test React components. Our primary goal is to validate the functionality of our code and detect potential bugs early in the development cycle.

## Why Vitest?

Vitest stands out as a cutting-edge testing framework, benefiting from the speed and efficiency of the Vite build tool. It offers a zero-config setup, simplifying the testing process for React components.

To follow along with this tutorial, you can clone the [Starter Project](https://github.com/Abhi0498-Blogs/vitest-react) and switch to the `before-vitest` branch using the following commands:

```bash
git clone https://github.com/Abhi0498-Blogs/vitest-react.git
cd vitest-react
git checkout before-vitest
npm i
npm run dev
```

This will initiate the development server, accessible at [http://localhost:5173](http://localhost:5173).

Begin by installing Vitest and @testing-library/react:

```bash
yarn add -D vitest @testing-library/react
```

Now, let's configure our `vite.config.js` file as follows:

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
```

In this configuration:

- `globals` makes all variables available in test files.
- `environment` sets the environment to `jsdom`, which is the default environment for Vitest.

To manage testing, update your `package.json` scripts:

```json
// package.json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

These scripts facilitate various testing scenarios:

- `test`: Run all tests.
- `test:watch`: Execute tests in watch mode.
- `test:ui`: Launch the Vitest UI.
- `test:coverage`: Generate a coverage report.

## Setting up the Test Environment

Create a `__tests__` folder within the `src` directory to house your tests:

```bash
mkdir src/__tests__
```

Now, let's take a closer look at the `src/components/buttons/` folder, which contains four components: `IncreaseButton`, `DecreaseButton`, `IncreaseBy10Button`, and `DecreaseBy10Button`. We'll begin by testing the `IncreaseButton` component.

Create a new file called `IncreaseButton.test.jsx` within the `__tests__` folder:

```bash
touch src/__tests__/IncreaseButton.test.jsx
```

Now, let's start writing our first test:

```jsx
// src/__tests__/IncreaseButton.test.jsx
import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import IncreaseButton from "../components/buttons/increase";
import { useState } from "react";

describe("IncreaseButton", () => {
  test("renders", () => {
    render(<IncreaseButton />);
    expect(screen.getByText("Increase")).toBeDefined();
  });
});
```

In the code above:

- `describe` is used to group tests together.
- `test` is used to define a test case.
- `render` renders the component.
- `screen` provides access to DOM elements.
- `expect` is used for assertions.

By executing this test, we ensure that the component renders without errors. If the "Increase" text is found in the DOM, the test passes; otherwise, it fails.

Now, let's run the test:

```bash
npm run test
```

If the test succeeds, you'll see a result similar to this:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qfps8sgzw5djke85w5dg.png)

This represents a test case—a set of conditions used to validate the system under test (SUT). Additionally, it highlights the importance of testing, as any future changes to the component that alter the text "Increase" will trigger a test failure.

## Testing Component Behavior

Let's write a test to verify that the count increases when the button is clicked. To achieve this, we'll add another test within the `describe` block:

```jsx
// src/__tests__/IncreaseButton.test.jsx
test("should increase count by 1", () => {
  // Arrange
  const ButtonWithCount = () => {
    const [count, setCount] = useState(0);
    return (
      <>
        <div data-testid="count">{count}</div>

        <IncreaseButton setCount={setCount} />
      </>
    );
  };

  // Act
  render(<ButtonWithCount />);

  const count = screen.getByTestId("count");
  const button = screen.getByText("Increase");

  fireEvent.click(button);

  // Assert
  expect(count.textContent).toBe("1");
});
```

In this test:

- We create a component called `ButtonWithCount`, which includes a count state and the `IncreaseButton` component.
- The `render` function renders `ButtonWithCount`.
- `fireEvent` is used to simulate a click on the button.
- `expect` is employed to assert that the count has increased to 1.

Now, let's run this test using the Vitest UI:

```bash
npm run test:ui
```

You'll see the Vitest UI, where you can execute your tests:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1quhu3c11smloqay034o.png)

Running tests in the UI offers a visual and interactive approach to testing your components.

## Conclusion

In this tutorial, we've covered the fundamentals of unit testing using Vitest and how to test React components effectively. Remember that this is just the beginning, and there are more components in the `src/components/buttons/` folder that you can test to gain a deeper understanding of Vitest.

By writing tests for your code, you not only ensure its reliability but also catch potential issues early in the development process. Embrace testing as a vital practice in your software development journey.

Happy Coding! 🎉
