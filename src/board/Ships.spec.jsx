import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Ships from "./Ships.jsx";

describe("Ships", () => {
  const mockTakeShot = vi.fn();

  it("is a CSS grid container", () => {
    render(<Ships onClick={mockTakeShot} />);

    expect(screen.getByTestId("grid")).toHaveClass("ships-grid");
  });

  it("has a square G7", () => {
    render(<Ships onClick={mockTakeShot} />);

    expect(screen.getByTestId("G7")).toBeInTheDocument();
  });

  it("takes a shot when clicked", () => {
    render(<Ships onClick={mockTakeShot} />);

    fireEvent.click(screen.getByTestId("G7"));

    expect(mockTakeShot).toHaveBeenCalledWith("G", "7");
  });
});
