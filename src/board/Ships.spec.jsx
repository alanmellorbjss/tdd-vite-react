import * as React from "react";
import { render, screen } from "@testing-library/react";

import Board from "./Ships.jsx";

describe("Board", () => {
  it("Shows an empty 7x7 grid with no ships", () => {
    render(<Board />);

    screen.debug();
  });
});
