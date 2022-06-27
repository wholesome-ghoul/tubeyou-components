import { mount } from "@cypress/react";
import Switch from "../Switch";

describe("Switch", () => {
  it("renders", () => {
    mount(<Switch />);
  });
});

