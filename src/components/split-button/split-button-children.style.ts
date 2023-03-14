import styled, { css } from "styled-components";
import BaseTheme, { ThemeObject } from "../../style/themes/base";
import StyledButton from "../button/button.style";

type StyledSplitButtonChildrenContainerProps = {
  theme: ThemeObject;
  align: "left" | "right";
  minWidth: number;
};

const StyledSplitButtonChildrenContainer = styled.div<StyledSplitButtonChildrenContainerProps>`
  ${({ theme, align, minWidth }) => css`
    background-color: var(--colorsActionMajorYang100);
    min-width: ${minWidth}px;
    white-space: nowrap;
    z-index: ${theme.zIndex.popover};
    box-shadow: var(--boxShadow100);

    ${StyledButton} {
      border: 1px solid var(--colorsActionMajorTransparent);
      display: block;
      margin-left: 0;
      min-width: 100%;
      text-align: ${align};
      z-index: ${theme.zIndex.overlay};

      & + & {
        margin-top: 3px;
      }
    }
  `}
`;

StyledSplitButtonChildrenContainer.defaultProps = {
  theme: BaseTheme,
};

export default StyledSplitButtonChildrenContainer;
