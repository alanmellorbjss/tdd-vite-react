import * as React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

global.fetch = vi.fn();

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("App", () => {
  it("fetches stuff from an API and displays them", async () => {
    const commentsResponse = [
      {
        postId: 1,
        id: 1,
        name: "Relatively Poor",
        email: "Eliseo@gardner.biz",
        body: "Overall, the performance was poor. Subsequent actions were also",
      },
      {
        postId: 1,
        id: 2,
        name: "Showing off in Latin",
        email: "Jayne_Kuhic@sydney.com",
        body: "using Latin isn't smart",
      },
    ];

    fetch.mockResolvedValue(createFetchResponse(commentsResponse));

    render(<App />);

    expect(await screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      /^Comments$/
    );
    const items = await screen.findAllByRole("article");

    expect(items).toHaveLength(2);

    //screen.debug();
  });
});
