import * as React from "react";

export interface AnchorNavigationProps {
  children?: React.ReactNode;
  /** The AnchorNavigationItems components to be rendered in the sticky navigation */
  stickyNavigation?: React.ReactNode;
  /** Allows to override existing component styles */
  styleOverride?: {
    root?: () => object | object;
    navigation?: () => object | object;
    content?: () => object | object;
  };
}

declare function AnchorNavigation(props: AnchorNavigationProps): JSX.Element;

export default AnchorNavigation;
