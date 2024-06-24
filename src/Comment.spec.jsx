import * as React from "react";
import { render, screen } from "@testing-library/react";

import Comment from "./Comment";

describe("Comment", () => {
  const stubComment = {
    id: 999,
    name: "Relatively Poor",
    body: "Failed to achieve goal set. Net negative progress",
  };

  it("displays summary as heading", () => {
    render(<Comment details={stubComment} />);

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      /^Relatively Poor$/
    );
  });

  it("displays main body as paragraph", () => {
    render(<Comment details={stubComment} />);

    expect(screen.getByRole("paragraph")).toHaveTextContent(
      /^Failed to achieve goal set\. Net negative progress$/
    );
  });
});
