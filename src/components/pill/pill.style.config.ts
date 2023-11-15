interface StyledPillInnerConfigProps {
  varietyColor: string;
  buttonFocus: string;
  content: string;
}

interface StyledPillConfig {
  status: {
    neutral: StyledPillInnerConfigProps;
    negative: StyledPillInnerConfigProps;
    warning: StyledPillInnerConfigProps;
    positive: StyledPillInnerConfigProps;
    information: StyledPillInnerConfigProps;
    neutralWhite: StyledPillInnerConfigProps;
  };
  tag: {
    primary: StyledPillInnerConfigProps;
  };
}

export default (isDarkBackground: boolean): StyledPillConfig => {
  return {
    status: {
      neutral: {
        varietyColor: isDarkBackground
          ? "var(--colorsSemanticNeutral400)"
          : "var(--colorsSemanticNeutral500)",
        buttonFocus: isDarkBackground
          ? "var(--colorsSemanticNeutral500)"
          : "var(--colorsSemanticNeutral600)",
        content: isDarkBackground
          ? "var(--colorsSemanticNeutralYin090)"
          : "var(--colorsSemanticNeutralYang100)",
      },
      negative: {
        varietyColor: "var(--colorsSemanticNegative500)",
        buttonFocus: "var(--colorsSemanticNegative600)",
        content: "var(--colorsSemanticNegativeYang100)",
      },
      warning: {
        varietyColor: "var(--colorsSemanticCaution400)",
        buttonFocus: "var(--colorsSemanticCaution600)",
        content: "var(--colorsSemanticCautionYin090)",
      },
      positive: {
        varietyColor: "var(--colorsSemanticPositive500)",
        buttonFocus: "var(--colorsSemanticPositive600)",
        content: "var(--colorsSemanticPositiveYang100)",
      },
      information: {
        varietyColor: isDarkBackground
          ? "var(--colorsSemanticInfo400)"
          : "var(--colorsSemanticInfo500)",
        buttonFocus: isDarkBackground
          ? "var(--colorsSemanticInfo500)"
          : "var(--colorsSemanticInfo600)",
        content: "var(--colorsSemanticInfoYang100)",
      },
      neutralWhite: {
        varietyColor: "var(--colorsSemanticNeutralYang100)",
        buttonFocus: "var(--colorsSemanticNeutralYin030)",
        content: "var(--colorsSemanticNeutral500)",
      },
    },
    tag: {
      primary: {
        varietyColor: "var(--colorsActionMajor500)",
        buttonFocus: "var(--colorsActionMajor600)",
        content: "var(--colorsActionMajorYang100)",
      },
    },
  };
};
