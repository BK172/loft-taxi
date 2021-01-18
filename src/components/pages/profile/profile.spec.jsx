import React from "react";
import { render } from "@testing-library/react";
import Profile from "./profile";

describe(`Profile component test`, () => {
  it(`Should renders Profile correctly`, () => {
	const { container } = render(<Profile />);
	expect(container.innerHTML).toMatch("Profile");
  });
});