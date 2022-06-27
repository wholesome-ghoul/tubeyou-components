import styled, { css } from "styled-components";

import { GridPos } from "../utils";

const StyledSwitch = styled.input`
  ${({ rowPos, colPos }: GridPos) => css`
    grid-row: ${rowPos};
    grid-column: ${colPos};
  `}
`;

export default StyledSwitch;
