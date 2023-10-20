import { ArgsTable as Props } from "@storybook/addon-docs";
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BorderProps,
  PositionProps,
  BackgroundProps,
  TypographyProps,
  ColorProps,
} from "styled-system";

interface StyledSystemDefaults
  extends SpaceProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    BorderProps,
    PositionProps,
    BackgroundProps,
    TypographyProps,
    ColorProps {}

interface StyledSystemProps {
  color?: boolean;
  spacing?: boolean;
  width?: boolean;
  layout?: boolean;
  flexBox?: boolean;
  grid?: boolean;
  defaults?: StyledSystemDefaults;
  margin?: boolean;
  padding?: boolean;
  background?: boolean;
  position?: boolean;
}

interface Table {
  category?: string;
  defaultValue?: {
    summary: string;
    detail?: string;
  };
  subcategory?: string;
  type?: {
    summary?: string;
    detail?: string;
  };
}

interface ControlType {
  type: string;
}

interface Mapping {
  [key: string]: {
    [option: string]: any;
  };
}

type Conditional = boolean | ((props: any) => boolean);

interface SBType {
  name: string;
}

interface SBScalarType {
  name: string;
}

interface PropType {
  control?: ControlType | { type: ControlType };
  description?: string;
  if?: Conditional;
  mapping?: Mapping;
  name?: string;
  options?: string[];
  table?: Table;
  type?: SBType | SBScalarType["name"];
}

type Props = {
  [key: string]: PropType;
};

const generateStyledSystemMarginProps = (defaults: StyledSystemDefaults) => {
  return [
    {
      m: {
        control: "text",
        description:
          "Margin, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Margin",
          defaultValue: {
            summary: defaults.m || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      mt: {
        control: "text",
        description:
          "Margin top, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Margin",
          defaultValue: {
            summary: defaults.mt || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      mr: {
        control: "text",
        description:
          "Margin right, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Margin",
          defaultValue: {
            summary: defaults.mr || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      mb: {
        control: "text",
        description:
          "Margin bottom, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Margin",
          defaultValue: {
            summary: defaults.mb || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      ml: {
        control: "text",
        description:
          "Margin left, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Margin",
          defaultValue: {
            summary: defaults.ml || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      mx: {
        control: "text",
        description:
          "Margin left/right, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Margin",
          defaultValue: {
            summary: defaults.mx || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      my: {
        control: "text",
        description:
          "Margin top/bottom, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Margin",
          defaultValue: {
            summary: defaults.my || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
  ];
};

const generateStyledSystemPaddingProps = (defaults: StyledSystemDefaults) => {
  return [
    {
      p: {
        control: "text",
        description:
          "Padding, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Padding",
          defaultValue: {
            summary: defaults.p || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      pt: {
        control: "text",
        description:
          "Padding top, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Padding",
          defaultValue: {
            summary: defaults.pt || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      pr: {
        control: "text",
        description:
          "Padding right, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Padding",
          defaultValue: {
            summary: defaults.pr || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      pb: {
        control: "text",
        description:
          "Padding bottom, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Padding",
          defaultValue: {
            summary: defaults.pb || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      pl: {
        control: "text",
        description:
          "Padding left, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Padding",
          defaultValue: {
            summary: defaults.pl || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      px: {
        control: "text",
        description:
          "Padding left/right, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Padding",
          defaultValue: {
            summary: defaults.px || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      py: {
        control: "text",
        description:
          "Padding top/bottom, an integer multiplier of the base spacing constant (8px) or any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Padding",
          defaultValue: {
            summary: defaults.py || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
  ];
};

const generateStyledSystemSpacingProps = (defaults: StyledSystemDefaults) => {
  return [
    ...generateStyledSystemMarginProps(defaults),
    ...generateStyledSystemPaddingProps(defaults),
  ];
};

const generateStyledSystemColorProps = (defaults: StyledSystemDefaults) => {
  return [
    {
      color: {
        control: "text",
        description:
          "Color, design token, theme value or any valid CSS string.",
        //required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Color",
          type: { summary: "string" },
          defaultValue: {
            summary: defaults?.color || "-",
          },
        },
      },
    },
    {
      backgroundColor: {
        control: "text",
        description:
          "Background, design token, theme value or any valid CSS string.",
        // required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Color",
          type: { summary: "string" },
          defaultValue: {
            summary: defaults?.backgroundColor || "-",
          },
        },
      },
    },
    {
      bg: {
        control: "text",
        description: "Shorthand for backgroundColor",
        // required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Color",
          defaultValue: {
            summary: defaults?.backgroundColor || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      opacity: {
        control: "text",
        description: "Any decimal between 0 and 1.0",
        // required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Color",
          defaultValue: {
            summary: defaults?.opacity || "-",
          },
          type: { summary: "decimal" },
        },
      },
    },
  ];
};

const generateStyledSystemWidthProps = (defaults: StyledSystemDefaults) => [
  {
    width: {
      control: "text",
      description:
        "Numbers from 0-1 are converted to percentage widths. Numbers greater than 1 are converted to pixel values. String values are passed as raw CSS values. And arrays are converted to responsive width styles. If theme.sizes is defined, the width prop will attempt to pick up values from the theme",
      required: false,
      table: {
        category: "Styled System Props",
        subcategory: "Layout",
        defaultValue: {
          summary: defaults.width || "-",
        },
        type: { summary: "number | string" },
      },
    },
  },
];

const generateStyledSystemLayoutProps = (defaults: StyledSystemDefaults) => {
  return [
    ...generateStyledSystemWidthProps(defaults),
    {
      height: {
        control: "text",
        description:
          "Numbers from 0-1 are converted to percentage heights. Numbers greater than 1 are converted to pixel values. String values are passed as raw CSS values. And arrays are converted to responsive height styles. If theme.sizes is defined, the height prop will attempt to pick up values from the theme",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Layout",
          defaultValue: {
            summary: defaults.height || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      minWidth: {
        control: "text",
        description:
          "Numbers from 0-1 are converted to percentage widths. Numbers greater than 1 are converted to pixel values. String values are passed as raw CSS values. And arrays are converted to responsive width styles. If theme.sizes is defined, the width prop will attempt to pick up values from the theme",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Layout",
          defaultValue: {
            summary: defaults.minWidth || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      maxWidth: {
        control: "text",
        description:
          "Numbers from 0-1 are converted to percentage widths. Numbers greater than 1 are converted to pixel values. String values are passed as raw CSS values. And arrays are converted to responsive width styles. If theme.sizes is defined, the width prop will attempt to pick up values from the theme",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Layout",
          defaultValue: {
            summary: defaults.maxWidth || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      minHeight: {
        control: "text",
        description:
          "Numbers from 0-1 are converted to percentage heights. Numbers greater than 1 are converted to pixel values. String values are passed as raw CSS values. And arrays are converted to responsive height styles. If theme.sizes is defined, the height prop will attempt to pick up values from the theme",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Layout",
          defaultValue: {
            summary: defaults.minWidth || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      maxHeight: {
        control: "text",
        description:
          "Numbers from 0-1 are converted to percentage heights. Numbers greater than 1 are converted to pixel values. String values are passed as raw CSS values. And arrays are converted to responsive height styles. If theme.sizes is defined, the height prop will attempt to pick up values from the theme",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Layout",
          defaultValue: {
            summary: defaults.maxWidth || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      size: {
        control: "text",
        description:
          "Width/Height, Numbers from 0-1 are converted to percentage values. Numbers greater than 1 are converted to pixel values. String values are passed as raw CSS values. And arrays are converted to responsive styles. If theme.sizes is defined, the height and width props will attempt to pick up values from the theme",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Layout",
          defaultValue: {
            summary: defaults.size || "-",
          },
          type: { summary: "number | string" },
        },
      },
    },
    {
      display: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Layout",
          defaultValue: {
            summary: defaults.display || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      verticalAlign: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Layout",
          defaultValue: {
            summary: defaults.verticalAlign || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      overflow: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Layout",
          defaultValue: {
            summary: defaults.overflow || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      overflowX: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Layout",
          defaultValue: {
            summary: defaults.overflowX || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      overflowY: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Layout",
          defaultValue: {
            summary: defaults.display || "-",
          },
          type: { summary: "string" },
        },
      },
    },
  ];
};

const generateStyledSystemFlexBoxProps = (defaults: StyledSystemDefaults) => {
  return [
    {
      alignItems: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Flexbox",
          defaultValue: {
            summary: defaults.alignItems || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      alignContent: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Flexbox",
          defaultValue: {
            summary: defaults.alignContent || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      justifyItems: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Flexbox",
          defaultValue: {
            summary: defaults.justifyItems || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      justifyContent: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Flexbox",
          defaultValue: {
            summary: defaults.justifyContent || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      flexWrap: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Flexbox",
          defaultValue: {
            summary: defaults.flexWrap || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      flexDirection: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Flexbox",
          defaultValue: {
            summary: defaults.flexDirection || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      flex: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Flexbox",
          defaultValue: {
            summary: defaults.flex || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      flexGrow: {
        control: "number",
        description: "Any number greater than 0.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Flexbox",
          defaultValue: {
            summary: defaults.flexGrow || "-",
          },
          type: { summary: "number" },
        },
      },
    },
    {
      flexShrink: {
        control: "number",
        description: "Any number greater than 0.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Flexbox",
          defaultValue: {
            summary: defaults.flexShrink || "-",
          },
          type: { summary: "number" },
        },
      },
    },
    {
      flexBasis: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Flexbox",
          defaultValue: {
            summary: defaults.flexBasis || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      justifySelf: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Flexbox",
          defaultValue: {
            summary: defaults.justifySelf || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      alignSelf: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Flexbox",
          defaultValue: {
            summary: defaults.alignSelf || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      order: {
        control: "number",
        description: "Any number greater than 0.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Flexbox",
          defaultValue: {
            summary: defaults.order || "-",
          },
          type: { summary: "number" },
        },
      },
    },
  ];
};

const generateStyledSystemGridProps = (defaults: StyledSystemDefaults) => {
  return [
    {
      gridColumn: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Grid",
          defaultValue: {
            summary: defaults.gridColumn || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      gridRow: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Grid",
          defaultValue: {
            summary: defaults.gridRow || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      gridArea: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Grid",
          defaultValue: {
            summary: defaults.gridArea || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      gridAutoFlow: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Grid",
          defaultValue: {
            summary: defaults.gridAutoFlow || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      gridAutoRows: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Grid",
          defaultValue: {
            summary: defaults.gridAutoRows || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      gridAutoColumns: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Grid",
          defaultValue: {
            summary: defaults.gridAutoColumns || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      gridTemplateRows: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Grid",
          defaultValue: {
            summary: defaults.gridTemplateRows || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      gridTemplateColumns: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Grid",
          defaultValue: {
            summary: defaults.gridTemplateColumns || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      gridTemplateAreas: {
        control: "text",
        description: "Any valid CSS string",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Grid",
          defaultValue: {
            summary: defaults.gridTemplateAreas || "-",
          },
          type: { summary: "string" },
        },
      },
    },
  ];
};

const generateStyledSystemBackgroundProps = (defaults: StyledSystemDefaults) => {
  return [
    {
      background: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Background",
          defaultValue: {
            summary: defaults.background || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      backgroundImage: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Background",
          defaultValue: {
            summary: defaults.backgroundImage || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      backgroundSize: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Background",
          defaultValue: {
            summary: defaults.backgroundSize || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      backgroundPosition: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Background",
          defaultValue: {
            summary: defaults.backgroundPosition || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      backgroundRepeat: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Background",
          defaultValue: {
            summary: defaults.backgroundRepeat || "-",
          },
          type: { summary: "string" },
        },
      },
    },
  ];
};

const generateStyledSystemPositionProps = (defaults: StyledSystemDefaults) => {
  return [
    {
      top: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Position",
          defaultValue: {
            summary: defaults.top || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      bottom: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Position",
          defaultValue: {
            summary: defaults.bottom || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      left: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Position",
          defaultValue: {
            summary: defaults.left || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      right: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Position",
          defaultValue: {
            summary: defaults.right || "-",
          },
          type: { summary: "string" },
        },
      },
    },
    {
      position: {
        control: "text",
        description: "Any valid CSS string.",
        required: false,
        table: {
          category: "Styled System Props",
          subcategory: "Position",
          defaultValue: {
            summary: defaults.position || "-",
          },
          type: { summary: "string" },
        },
      },
    },
  ];
};

const generateStyledSystemProps = (
  props: StyledSystemProps,
  defaults?: StyledSystemDefaults
): StyledSystemProps => {
  const {
    spacing,
    margin,
    padding,
    color,
    layout,
    width,
    flexBox,
    grid,
    background,
    position,
  } = props;
  const result: Props = {};

  if (spacing) {
    Object.assign(result, ...generateStyledSystemSpacingProps(defaults || {}));
  }
  if (margin) {
    Object.assign(result, ...generateStyledSystemMarginProps(defaults || {}));
  }
  if (padding) {
    Object.assign(result, ...generateStyledSystemPaddingProps(defaults || {}));
  }
  if (color) {
    Object.assign(result, ...generateStyledSystemColorProps(defaults || {}));
  }
  if (layout) {
    Object.assign(result, ...generateStyledSystemLayoutProps(defaults || {}));
  }
  if (width) {
    Object.assign(result, ...generateStyledSystemWidthProps(defaults || {}));
  }
  if (flexBox) {
    Object.assign(result, ...generateStyledSystemFlexBoxProps(defaults || {}));
  }
  if (grid) {
    Object.assign(result, ...generateStyledSystemGridProps(defaults || {}));
  }
  if (background) {
    Object.assign(result, ...generateStyledSystemBackgroundProps(defaults || {}));
  }
  if (position) {
    Object.assign(result, ...generateStyledSystemPositionProps(defaults || {}));
  }

  return result;
};

export default generateStyledSystemProps;
