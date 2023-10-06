import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import IncreaseButton from "../components/buttons/increase";
import { useState } from "react";

describe("IncreaseButton", () => {
  test("renders", () => {
    render(<IncreaseButton />);
    expect(screen.getByText("Increase")).toBeDefined();
  });

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
});
