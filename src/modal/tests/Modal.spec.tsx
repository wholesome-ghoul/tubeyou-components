import { mount } from "@cypress/react";

import Modal from "../Modal";

describe("Modal", () => {
  it("renders", () => {
    mount(<Modal visible={true} />);
  });
});
