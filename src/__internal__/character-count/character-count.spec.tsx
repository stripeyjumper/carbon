import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { assertStyleMatch } from "../../__spec_helper__/test-utils";
import CharacterCount from ".";
import StyledCharacterCount from "../character-count/character-count.style";

describe("CharacterCount", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <CharacterCount value={5} limit={10} isOverLimit={false} />
    );
  });

  describe("when rendered", () => {
    it("should render default", () => {
      assertStyleMatch(
        {
          textAlign: "right",
          fontSize: "12px",
          marginTop: "4px",
          marginBottom: "4px",
          color: "var(--colorsUtilityYin055)",
        },
        wrapper
      );
    });
  });

  describe("when isOverLimit prop is true", () => {
    it("should be styled for warn over limit", () => {
      wrapper.setProps({ isOverLimit: true });
      assertStyleMatch(
        {
          fontWeight: "700",
          color: "var(--colorsSemanticNegative500)",
        },
        wrapper
      );
    });

    it("character count string should be correct", () => {
      wrapper = mount(<CharacterCount value={4} limit={3} isOverLimit />);
      expect(wrapper.find(StyledCharacterCount).text()).toBe(
        "You have 1 character too many"
      );
    });
  });

  describe("when isOverLimit prop is false", () => {
    it("character count string should be correct", () => {
      wrapper = mount(
        <CharacterCount value={2} limit={3} isOverLimit={false} />
      );
      expect(wrapper.find(StyledCharacterCount).text()).toBe(
        "You have 1 character remaining"
      );
    });
  });
});
