import {
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { render ,screen} from "@testing-library/react";
import { test } from "vitest";
import routesConfig from '../route-config';
import { expect } from "vitest";
test("test", async () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });

  render(<RouterProvider router={router} />);

  expect(screen.getAllByText('Clothing Brand.')).toReturn

  // make assertions, await changes, etc...
});