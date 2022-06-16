import { useState } from "react";
import { mount } from "@cypress/react";

import Modal from "../Modal";

describe("Modal", () => {
  it("renders", () => {
    const [visible, setVisible] = useState(false);
    mount(<Modal visible={visible} setVisible={setVisible} />);
  });
});
