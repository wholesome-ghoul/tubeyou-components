import styled, { css } from "styled-components";

import { GridPos } from "../utils";

const StyledSidebar = styled.div`
  ${({ rowPos, colPos }: GridPos) => css`
    grid-row: ${rowPos};
    grid-column: ${colPos};
  `}
`;

export default StyledSidebar;

