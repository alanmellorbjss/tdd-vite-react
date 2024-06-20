import { render, screen } from "@testing-library/react";

import App from "./App.jsx";

describe("App", () => {
  it("renders a top-level heading", async () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Vite + React"
    );
  });
});
