import { mount } from "@cypress/react";
import Sidebar from "../Sidebar";

describe("Sidebar", () => {
  it("renders", () => {
    mount(<Sidebar options={[]} />);
  });
});
