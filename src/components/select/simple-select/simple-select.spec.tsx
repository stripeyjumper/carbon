import React, { useRef } from "react";
import { act } from "react-dom/test-utils";
import { mount, ReactWrapper } from "enzyme";

import {
  assertStyleMatch,
  testStyledSystemMargin,
} from "../../../__spec_helper__/test-utils";
import { Select as SimpleSelect, Option, SimpleSelectProps } from "..";
import Textbox from "../../textbox";
import SelectList from "../select-list/select-list.component";
import StyledSelectListContainer from "../select-list/select-list-container.style";
import InputIconToggleStyle from "../../../__internal__/input-icon-toggle/input-icon-toggle.style";
import InputPresentationStyle from "../../../__internal__/input/input-presentation.style";
import Label from "../../../__internal__/label";
import { InputPresentation } from "../../../__internal__/input";
import Logger from "../../../__internal__/utils/logger";
import guid from "../../../__internal__/utils/helpers/guid";
import StyledInput from "../../../__internal__/input/input.style";
import SelectTextbox from "../select-textbox";

const mockedGuid = "mocked-guid";
jest.mock("../../../__internal__/utils/helpers/guid");
jest.useFakeTimers();
(guid as jest.MockedFunction<typeof guid>).mockReturnValue(mockedGuid);

function getSelect(props: Partial<SimpleSelectProps> = {}) {
  return (
    <SimpleSelect name="testSelect" id="testSelect" {...props}>
      <Option value="opt1" text="red" />
      <Option value="opt2" text="green" />
      <Option value="opt3" text="blue" />
      <Option value="opt4" text="black" />
    </SimpleSelect>
  );
}

function renderSelect(props = {}, renderer = mount) {
  return renderer(getSelect(props));
}

function simulateSelectTextboxEvent(
  container: ReactWrapper,
  eventType: string
) {
  const selectText = container.find('input[type="text"]').first();

  act(() => {
    selectText.simulate(eventType);
    if (eventType === "focus") jest.runOnlyPendingTimers();
  });
}

function simulateKeyDown(
  container: ReactWrapper,
  key: string,
  options: Partial<React.KeyboardEvent> = {}
) {
  const selectText = container.find(SelectTextbox).first();

  act(() => {
    selectText.prop("onKeyDown")?.({
      key,
      preventDefault: () => {},
      ...options,
    } as React.KeyboardEvent<HTMLInputElement>);
  });
}

jest.mock("../../../__internal__/utils/logger");

describe("SimpleSelect", () => {
  let loggerSpy: jest.SpyInstance<void, [message: string]> | jest.Mock;

  describe("Deprecation warning for uncontrolled", () => {
    beforeEach(() => {
      loggerSpy = jest.spyOn(Logger, "deprecate");
    });

    afterEach(() => {
      loggerSpy.mockRestore();
    });

    afterAll(() => {
      loggerSpy.mockClear();
    });

    it("should display deprecation warning once", () => {
      renderSelect({ defaultValue: "opt1" });

      expect(loggerSpy).toHaveBeenCalledWith(
        "Uncontrolled behaviour in `Simple Select` is deprecated and support will soon be removed. Please make sure all your inputs are controlled."
      );

      expect(loggerSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe("when the id prop is set", () => {
    const mockId = "foo";
    const wrapper = renderSelect({ id: mockId, label: "bar" });

    it("then it should be passed to the Textbox component", () => {
      expect(wrapper.find(Textbox).prop("id")).toBe(mockId);
    });

    it("then a label id based on that prop should be passed to the SelectList component", () => {
      expect(wrapper.find(SelectList).prop("labelId")).toBe(`${mockId}-label`);
    });

    it("then a label id based on that prop should be passed to the Textbox component", () => {
      expect(wrapper.find(Textbox).prop("labelId")).toBe(`${mockId}-label`);
    });
  });

  describe("when the id prop is not set", () => {
    const wrapper = renderSelect({ id: undefined, label: "bar" });

    it("then a randomly generated id should be passed to the Textbox component", () => {
      expect(wrapper.find(Textbox).prop("id")).toBe(mockedGuid);
    });

    it("then a label id based on randomly generated id should be passed to the SelectList component", () => {
      expect(wrapper.find(SelectList).prop("labelId")).toBe(
        `${mockedGuid}-label`
      );
    });

    it("then a label id based on a randomly generated id should be passed to the Textbox component", () => {
      expect(wrapper.find(Textbox).prop("labelId")).toBe(`${mockedGuid}-label`);
    });
  });

  describe("when an HTML element is clicked when the SelectList is open", () => {
    let wrapper: ReactWrapper;
    let domNode: HTMLElement;

    beforeEach(() => {
      wrapper = mount(getSelect());
      domNode = wrapper.getDOMNode();
      document.body.appendChild(domNode);
    });

    describe("and that element is an Option of the Select List", () => {
      it("then the SelectList should be closed", () => {
        simulateSelectTextboxEvent(wrapper, "click");
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).toBeVisible());
        act(() => {
          wrapper
            .find(Option)
            .first()
            .getDOMNode()
            .dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).not.toBeVisible());
      });
    });

    describe("and that element is not part of the Select", () => {
      it("then the SelectList should be closed", () => {
        act(() => {
          document.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        simulateSelectTextboxEvent(wrapper, "click");
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).toBeVisible());
        act(() => {
          document.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).not.toBeVisible());
      });
    });

    afterEach(() => {
      document.body.removeChild(domNode);
    });
  });

  describe("disablePortal", () => {
    it("renders SelectList with a disablePortal prop assigned", () => {
      const wrapper = renderSelect({ disablePortal: true });

      wrapper.find(Textbox).find('[type="dropdown"]').first().simulate("click");
      expect(wrapper.find(SelectList).props().disablePortal).toBe(true);
    });
  });

  testStyledSystemMargin((props) => getSelect(props));

  it("when placeholder prop is passed, textbox uses it as placeholder text", () => {
    const placeholder = "foobaz";
    const wrapper = renderSelect({ placeholder });
    expect(wrapper.find("span[data-element='select-text']").text()).toBe(
      placeholder
    );
  });

  describe("with a ref", () => {
    it("the input ref should be forwarded", () => {
      let mockRef: React.MutableRefObject<HTMLElement | null> = {
        current: null,
      };

      const WrapperComponent = () => {
        mockRef = useRef(null);

        return (
          <SimpleSelect name="testSelect" id="testSelect" ref={mockRef}>
            <Option value="opt1" text="red" />
            <Option value="opt2" text="green" />
            <Option value="opt3" text="blue" />
            <Option value="opt4" text="black" />
          </SimpleSelect>
        );
      };

      const wrapper = mount(<WrapperComponent />);

      expect(mockRef.current).toBe(wrapper.find("input").getDOMNode());
    });

    it("the input callback ref should be called with the DOM element", () => {
      let mockRef;

      const WrapperComponent = () => {
        mockRef = jest.fn();

        return (
          <SimpleSelect name="testSelect" id="testSelect" ref={mockRef}>
            <Option value="opt1" text="red" />
            <Option value="opt2" text="green" />
            <Option value="opt3" text="blue" />
            <Option value="opt4" text="black" />
          </SimpleSelect>
        );
      };

      const wrapper = mount(<WrapperComponent />);

      expect(mockRef).toHaveBeenCalledWith(wrapper.find("input").getDOMNode());
    });
  });

  it("the input toggle icon should have proper left margin", () => {
    const wrapper = renderSelect();

    assertStyleMatch(
      {
        marginRight: "0",
      },
      wrapper,
      { modifier: `${InputIconToggleStyle}` }
    );
  });

  describe("when listMaxHeight prop is provided", () => {
    it("overrides default list max-height", () => {
      mount(getSelect());
      const wrapper = renderSelect({ listMaxHeight: 120, openOnFocus: true });

      simulateSelectTextboxEvent(wrapper, "focus");
      assertStyleMatch(
        { maxHeight: "120px" },
        wrapper.find(StyledSelectListContainer)
      );
    });
  });

  describe("when the transparent prop is set to true", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
      wrapper = renderSelect({ transparent: true });
    });

    it("then the input should have transparent background and no border", () => {
      assertStyleMatch(
        {
          background: "transparent",
          border: "none",
        },
        wrapper,
        { modifier: `${InputPresentationStyle}` }
      );
    });
  });

  describe("when the value prop is passed", () => {
    it("then the formatted value should be set to corresponding option text", () => {
      const wrapper = renderSelect({ value: "opt2", onChange: jest.fn() });

      expect(wrapper.find(Textbox).prop("formattedValue")).toBe("green");
    });
  });

  describe("when the inputRef prop is specified", () => {
    it("should display deprecation warning when the inputRef prop is used", () => {
      const inputRefFn = jest.fn();
      const wrapper = renderSelect({ inputRef: inputRefFn });

      expect(loggerSpy.mock.calls).toEqual([
        [
          "The `inputRef` prop in `Simple Select` component is deprecated and will soon be removed. Please use `ref` instead.",
        ],
        [
          "The `inputRef` prop in `Textbox` component is deprecated and will soon be removed. Please use `ref` instead.",
        ],
      ]);

      expect(loggerSpy).toHaveBeenCalledTimes(2);
      // will be called twice because the prop is passed to Textbox where another deprecation warning is triggered.
      wrapper.setProps({ prop1: true });
      expect(loggerSpy).toHaveBeenCalledTimes(2);
      loggerSpy.mockRestore();
    });

    it("then the input reference should be returned on call", () => {
      const inputRefFn = jest.fn();
      const wrapper = renderSelect({ inputRef: inputRefFn });

      expect(inputRefFn).toHaveBeenCalledWith({
        current: wrapper.find("input").getDOMNode(),
      });
    });
  });

  describe("when the openOnFocus prop is set", () => {
    describe("and the Textbox Input is focused", () => {
      it("the SelectList should be rendered", () => {
        const wrapper = renderSelect({ openOnFocus: true });

        simulateSelectTextboxEvent(wrapper, "focus");
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).toBeVisible());
      });

      describe.each(["readOnly", "disabled"])(
        "with the %s prop passed",
        (prop) => {
          it("the SelectList should not be rendered", () => {
            const obj = { [prop]: true, openOnFocus: true };
            const wrapper = renderSelect(obj);

            simulateSelectTextboxEvent(wrapper, "focus");
            wrapper
              .find(Option)
              .forEach((option) =>
                expect(option.getDOMNode()).not.toBeVisible()
              );
          });
        }
      );

      describe("with the onFocus prop passed", () => {
        it("then that prop should be called", () => {
          const onFocusFn = jest.fn();
          const wrapper = renderSelect({
            onFocus: onFocusFn,
            openOnFocus: true,
          });

          simulateSelectTextboxEvent(wrapper, "focus");
          expect(onFocusFn).toHaveBeenCalled();
        });
      });

      describe("with the onOpen prop passed", () => {
        let wrapper: ReactWrapper;
        let onOpenFn: jest.Mock;

        beforeEach(() => {
          onOpenFn = jest.fn();
          wrapper = renderSelect({ onOpen: onOpenFn, openOnFocus: true });
        });

        it("then that prop should be called", () => {
          simulateSelectTextboxEvent(wrapper, "focus");

          expect(onOpenFn).toHaveBeenCalled();
        });

        describe("and the SelectList already open", () => {
          it("then that prop should not be called", () => {
            simulateSelectTextboxEvent(wrapper, "focus");
            onOpenFn.mockReset();
            wrapper
              .find(Option)
              .forEach((option) => expect(option.getDOMNode()).toBeVisible());
            simulateSelectTextboxEvent(wrapper, "focus");
            expect(onOpenFn).not.toHaveBeenCalled();
          });
        });

        describe("and the focus triggered by mouseDown", () => {
          it("then that prop should not be called", () => {
            simulateSelectTextboxEvent(wrapper, "mousedown");
            simulateSelectTextboxEvent(wrapper, "focus");
            expect(onOpenFn).not.toHaveBeenCalled();
          });
        });
      });
    });
  });

  describe("when the Textbox Input is focused", () => {
    let onOpenFn: jest.Mock;
    let wrapper: ReactWrapper;

    beforeEach(() => {
      onOpenFn = jest.fn();
      wrapper = renderSelect({ onOpen: onOpenFn });
    });

    it("the SelectList should not be rendered", () => {
      simulateSelectTextboxEvent(wrapper, "focus");
      wrapper
        .find(Option)
        .forEach((option) => expect(option.getDOMNode()).not.toBeVisible());
    });

    describe.each([
      "Enter",
      "ArrowDown",
      "ArrowUp",
      "Home",
      "End",
      " ", // spacebar
    ])('and the "%s" key is pressed', (key) => {
      it("the SelectList should be rendered", () => {
        simulateKeyDown(wrapper, key);
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).toBeVisible());
      });

      it("the onOpen prop should be called", () => {
        simulateKeyDown(wrapper, key);
        expect(onOpenFn).toHaveBeenCalled();
      });

      describe("with the SelectList already open", () => {
        it("the onOpen prop should not be called", () => {
          simulateSelectTextboxEvent(wrapper, "click");
          onOpenFn.mockReset();
          wrapper
            .find(Option)
            .forEach((option) => expect(option.getDOMNode()).toBeVisible());
          simulateKeyDown(wrapper, key);
          expect(onOpenFn).not.toHaveBeenCalled();
        });
      });

      describe("with readOnly prop set to true", () => {
        it("then the SelectList should not be rendered", () => {
          wrapper.setProps({ readOnly: true });
          simulateKeyDown(wrapper, key);
          wrapper
            .find(Option)
            .forEach((option) => expect(option.getDOMNode()).not.toBeVisible());
        });
      });
    });

    describe("and a key other than Enter, Up or Down is pressed", () => {
      it("the SelectList should not be rendered", () => {
        simulateKeyDown(wrapper, "b");
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).not.toBeVisible());
      });

      describe("with readOnly prop set to true", () => {
        it("then the SelectList should not be rendered", () => {
          wrapper.setProps({ readOnly: true });
          wrapper.update();
          simulateKeyDown(wrapper, "b");
          wrapper
            .find(Option)
            .forEach((option) => expect(option.getDOMNode()).not.toBeVisible());
        });
      });
    });
  });

  describe("when the Textbox Input is clicked", () => {
    it("the SelectList should be rendered", () => {
      const wrapper = renderSelect();

      simulateSelectTextboxEvent(wrapper, "click");
      wrapper
        .find(Option)
        .forEach((option) => expect(option.getDOMNode()).toBeVisible());
    });

    describe.each(["disabled", "readOnly"])(
      "and the %s prop is set to true",
      (prop) => {
        it('then the "onClick" prop should not be called', () => {
          const onClickFn = jest.fn();
          const wrapper = renderSelect({ onClick: onClickFn, [prop]: true });

          simulateSelectTextboxEvent(wrapper, "click");
          expect(onClickFn).not.toHaveBeenCalled();
        });

        it("then the SelectList should not be rendered", () => {
          const wrapper = renderSelect({ [prop]: true });

          simulateSelectTextboxEvent(wrapper, "click");
          wrapper
            .find(Option)
            .forEach((option) => expect(option.getDOMNode()).not.toBeVisible());
        });
      }
    );

    describe("and the onClick prop is passed", () => {
      it("then that prop should be called", () => {
        const onClickFn = jest.fn();
        const wrapper = renderSelect({ onClick: onClickFn });

        simulateSelectTextboxEvent(wrapper, "click");
        expect(onClickFn).toHaveBeenCalled();
      });
    });

    describe("and the onOpen prop is passed", () => {
      it("then that prop should be called", () => {
        const onOpenFn = jest.fn();
        const wrapper = renderSelect({ onOpen: onOpenFn });

        simulateSelectTextboxEvent(wrapper, "click");
        expect(onOpenFn).toHaveBeenCalled();
      });
    });

    describe("and the SelectList is open", () => {
      it("then the SelectList should be closed", () => {
        const wrapper = renderSelect();

        simulateSelectTextboxEvent(wrapper, "click");
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).toBeVisible());
        simulateSelectTextboxEvent(wrapper, "click");
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).not.toBeVisible());
      });
    });

    it.each(["top", "bottom", "right", "left"])(
      "the listPlacement prop should be passed",
      (listPlacement) => {
        const wrapper = renderSelect({ listPlacement });

        simulateSelectTextboxEvent(wrapper, "click");
        expect(wrapper.find(SelectList).prop("listPlacement")).toBe(
          listPlacement
        );
      }
    );

    it("the flipEnabled prop should be passed", () => {
      const wrapper = renderSelect({ flipEnabled: false });

      simulateSelectTextboxEvent(wrapper, "click");
      expect(wrapper.find(SelectList).prop("flipEnabled")).toBe(false);
      wrapper.setProps({ flipEnabled: true });
      expect(wrapper.find(SelectList).prop("flipEnabled")).toBe(true);
    });
  });

  describe("when the Dropdown Icon in the Textbox has been clicked", () => {
    it("the SelectList should be rendered", () => {
      const wrapper = renderSelect();

      wrapper.find(Textbox).find('[type="dropdown"]').first().simulate("click");
      wrapper
        .find(Option)
        .forEach((option) => expect(option.getDOMNode()).toBeVisible());
    });

    describe("and the SelectList is open", () => {
      it("then the SelectList should be closed", () => {
        const wrapper = renderSelect();

        wrapper
          .find(Textbox)
          .find('[type="dropdown"]')
          .first()
          .simulate("click");
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).toBeVisible());
        wrapper
          .find(Textbox)
          .find('[type="dropdown"]')
          .first()
          .simulate("click");
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).not.toBeVisible());
      });
    });
  });

  describe("when a printable character key has been pressed in the Textbox", () => {
    it("then the first option with text starting with that character should be selected", () => {
      const wrapper = renderSelect();

      simulateKeyDown(wrapper, "b");
      wrapper.update();
      expect(wrapper.find(Textbox).prop("value")).toBe("opt3");
      wrapper.unmount();
    });

    it("if the Meta key is pressed at the same time, nothing should happen", () => {
      const wrapper = renderSelect();

      simulateKeyDown(wrapper, "b", { metaKey: true });
      wrapper.update();
      expect(wrapper.find(Textbox).prop("value")).toBe("");
      wrapper.unmount();
    });

    it("if the Control key is pressed at the same time, nothing should happen", () => {
      const wrapper = renderSelect();

      simulateKeyDown(wrapper, "b", { ctrlKey: true });
      wrapper.update();
      expect(wrapper.find(Textbox).prop("value")).toBe("");
      wrapper.unmount();
    });

    describe("and the same key is pressed in a short amount of time", () => {
      it("then the second option with text starting with that character should be selected", () => {
        const wrapper = renderSelect();

        simulateKeyDown(wrapper, "b");
        simulateKeyDown(wrapper, "b");
        wrapper.update();
        expect(wrapper.find(Textbox).prop("value")).toBe("opt4");
        wrapper.unmount();
      });
    });

    describe("and other key that does not match the text in any option has been typed", () => {
      it("then the option starting with previous character should remain selected", () => {
        const wrapper = renderSelect();

        simulateKeyDown(wrapper, "b");
        simulateKeyDown(wrapper, "x");
        wrapper.update();
        expect(wrapper.find(Textbox).prop("value")).toBe("opt3");
        wrapper.unmount();
      });
    });

    describe("and another keys are typed in a short amount of time", () => {
      it("then an option with matching text should be selected", () => {
        const wrapper = renderSelect({ openOnFocus: true });

        simulateSelectTextboxEvent(wrapper, "focus");
        simulateKeyDown(wrapper, "b");
        simulateKeyDown(wrapper, "l");
        simulateKeyDown(wrapper, "a");
        wrapper.update();
        expect(wrapper.find(Textbox).prop("value")).toBe("opt4");
        wrapper.unmount();
      });
    });

    describe("and another keys are typed with a long break before the last change", () => {
      it("then the first option with text starting the last typed character should be selected", () => {
        const wrapper = renderSelect();

        act(() => {
          simulateSelectTextboxEvent(wrapper, "focus");
          simulateKeyDown(wrapper, "b");
          simulateKeyDown(wrapper, "l");
          jest.runOnlyPendingTimers();
          simulateKeyDown(wrapper, "g");
        });

        expect(wrapper.update().find(Textbox).prop("value")).toBe("opt2");
      });
    });

    describe("and the onChange prop is passed", () => {
      it("then that prop should be called with the value of first matching option", () => {
        const textboxProps = {
          name: "testName",
          id: "testId",
        };
        const mockEventObject = {
          selectionConfirmed: false,
          target: {
            ...textboxProps,
            value: "opt3",
          },
        };
        const onChangeFn = jest.fn();
        const wrapper = renderSelect({ ...textboxProps, onChange: onChangeFn });

        simulateSelectTextboxEvent(wrapper, "focus");
        simulateKeyDown(wrapper, "b");
        expect(onChangeFn).toHaveBeenCalledWith(mockEventObject);
      });
    });
  });

  describe("when the onSelect is called in the SelectList", () => {
    const navigationKeyOptionObject = {
      value: "opt2",
      text: "green",
      selectionType: "navigationKey",
      selectionConfirmed: false,
    };
    const clickOptionObject = {
      value: "opt2",
      text: "green",
      selectionType: "click",
      selectionConfirmed: true,
    };
    const textboxProps = {
      name: "testName",
      id: "testId",
    };
    const expectedEventObject = {
      selectionConfirmed: true,
      target: {
        ...textboxProps,
        value: "opt2",
      },
    };

    describe('with "selectionType" as "click"', () => {
      it("the SelectList should be closed", () => {
        const wrapper = renderSelect();

        simulateSelectTextboxEvent(wrapper, "click");
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).toBeVisible());
        act(() => {
          wrapper.find(SelectList).prop("onSelect")(clickOptionObject);
        });
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).not.toBeVisible());
      });
    });

    describe('with "selectionType" as "navigationKey"', () => {
      const wrapper = renderSelect();

      beforeAll(() => {
        simulateSelectTextboxEvent(wrapper, "click");
        act(() => {
          wrapper.find(SelectList).prop("onSelect")(navigationKeyOptionObject);
        });
        wrapper.update();
      });

      it("the SelectList should be open", () => {
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).toBeVisible());
      });

      it("the expected value should be selected", () => {
        expect(wrapper.find(Textbox).prop("value")).toBe(
          navigationKeyOptionObject.value
        );
      });

      it("the expected text should be displayed in the Textbox", () => {
        expect(wrapper.find(Textbox).prop("formattedValue")).toBe(
          navigationKeyOptionObject.text
        );
      });
    });

    describe("and the onChange prop is passed", () => {
      it("then that prop should be called with the same value", () => {
        const onChangeFn = jest.fn();
        const wrapper = renderSelect({ ...textboxProps, onChange: onChangeFn });

        simulateSelectTextboxEvent(wrapper, "click");
        act(() => {
          wrapper.find(SelectList).prop("onSelect")(clickOptionObject);
        });
        expect(onChangeFn).toHaveBeenCalledWith(expectedEventObject);
      });
    });

    describe("by clicking on an Option", () => {
      it("then the SelectList should be closed", () => {
        const wrapper = renderSelect();

        simulateSelectTextboxEvent(wrapper, "click");
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).toBeVisible());
        act(() => {
          wrapper.find(Option).first().simulate("click");
        });
        simulateSelectTextboxEvent(wrapper, "focus");
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).not.toBeVisible());
      });
    });
  });

  describe("when the onSelectListClose is called in the SelectList", () => {
    it("the SelectList should be closed", () => {
      const wrapper = renderSelect();

      simulateSelectTextboxEvent(wrapper, "click");
      wrapper
        .find(Option)
        .forEach((option) => expect(option.getDOMNode()).toBeVisible());
      act(() => {
        wrapper.find(SelectList).prop("onSelectListClose")();
      });
      wrapper
        .find(Option)
        .forEach((option) => expect(option.getDOMNode()).not.toBeVisible());
    });
  });

  describe("when the onKeyDown prop is passed", () => {
    const expectedEventObject = {
      key: "ArrowDown",
    };

    it("then when a key is pressed, that prop should be called with expected values", () => {
      const onKeyDownFn = jest.fn();
      const wrapper = renderSelect({ onKeyDown: onKeyDownFn });

      simulateKeyDown(wrapper, "ArrowDown");

      expect(onKeyDownFn).toHaveBeenCalledWith(
        expect.objectContaining({
          ...expectedEventObject,
        })
      );
    });
  });

  describe('when the "onBlur" prop has been passed and the input has been blurred', () => {
    it("then that prop should be called", () => {
      const onBlurFn = jest.fn();
      const wrapper = renderSelect({ onBlur: onBlurFn });

      simulateSelectTextboxEvent(wrapper, "blur");
      expect(onBlurFn).toHaveBeenCalled();
    });

    describe("and there is a mouseDown reported on open list", () => {
      it("then that prop should not be called", () => {
        const onBlurFn = jest.fn();
        const wrapper = renderSelect({ onBlur: onBlurFn, openOnFocus: true });

        simulateSelectTextboxEvent(wrapper, "focus");
        wrapper.find(Option).first().simulate("mousedown");
        simulateSelectTextboxEvent(wrapper, "blur");
        expect(onBlurFn).not.toHaveBeenCalled();
      });
    });

    it("coverage filler for else path", () => {
      const wrapper = renderSelect();
      simulateSelectTextboxEvent(wrapper, "blur");
    });
  });

  describe("when the component is controlled", () => {
    const onChangeFn = jest.fn();
    let wrapper: ReactWrapper;
    const expectedObject = {
      target: {
        id: "testSelect",
        name: "testSelect",
        value: "opt3",
      },
    };

    const clickOptionObject = {
      value: "opt3",
      text: "black",
      selectionType: "click",
      selectionConfirmed: true,
    };

    beforeEach(() => {
      onChangeFn.mockClear();
      wrapper = renderSelect({ onChange: onChangeFn, value: "opt1" });
    });

    describe("and an option is selected", () => {
      it("then the onChange prop should be called with expected value", () => {
        simulateSelectTextboxEvent(wrapper, "click");
        wrapper
          .find(Option)
          .forEach((option) => expect(option.getDOMNode()).toBeVisible());
        act(() => {
          wrapper.find(SelectList).prop("onSelect")(clickOptionObject);
        });
        expect(onChangeFn).toHaveBeenCalledWith({
          selectionConfirmed: true,
          ...expectedObject,
        });
      });
    });

    describe("and a printable character has been typed in the Textbox", () => {
      beforeEach(() => {
        simulateKeyDown(wrapper, "b");
        wrapper.update();
      });

      it("then the value should not change", () => {
        expect(wrapper.find(Textbox).prop("value")).toBe("opt1");
      });

      it("then the onChange function should have been called with with the expected value", () => {
        expect(onChangeFn).toHaveBeenCalledWith({
          selectionConfirmed: false,
          ...expectedObject,
        });
      });
    });

    describe("and an an empty value has been passed", () => {
      it("then the textbox displayed value should be cleared", () => {
        expect(wrapper.find(Textbox).props().formattedValue).toBe("red");
        wrapper.setProps({ value: "" });
        expect(wrapper.update().find(Textbox).props().formattedValue).toBe("");
      });

      it("then the textbox value should be cleared", () => {
        expect(wrapper.find(Textbox).props().value).toBe("opt1");
        wrapper.setProps({ value: "" });
        expect(wrapper.update().find(Textbox).props().value).toBe("");
      });
    });

    describe("when parent re-renders", () => {
      const WrapperComponent = () => {
        const mockRef = useRef();

        return (
          <span>
            <SimpleSelect name="testSelect" id="testSelect" ref={mockRef}>
              <Option value="opt1" text="red" />
              <Option value="opt2" text="green" />
              <Option value="opt3" text="blue" />
              <Option value="opt4" text="black" />
            </SimpleSelect>
          </span>
        );
      };

      it("should persist the input value", () => {
        wrapper = mount(<WrapperComponent />);
        wrapper.find("input").simulate("click");
        act(() => {
          wrapper.find(Option).first().simulate("click");
        });
        expect(wrapper.update().find(Textbox).props().formattedValue).toBe(
          "red"
        );
        wrapper.setProps({ prop: "foo" });
        expect(wrapper.update().find(Textbox).props().formattedValue).toBe(
          "red"
        );
      });
    });
  });

  describe("required", () => {
    let wrapper: ReactWrapper;

    beforeAll(() => {
      wrapper = renderSelect({ label: "required", required: true });
    });

    it("the required prop is passed to the input", () => {
      const input = wrapper.find("input");
      expect(input.prop("required")).toBe(true);
    });

    it("the isRequired prop is passed to the label", () => {
      const label = wrapper.find(Label);
      expect(label.prop("isRequired")).toBe(true);
    });
  });

  it("has the expected border radius styling", () => {
    const wrapper = renderSelect({});
    assertStyleMatch(
      { borderRadius: "var(--borderRadius050)" },
      wrapper.find(StyledInput)
    );

    assertStyleMatch(
      { borderRadius: "var(--borderRadius050)" },
      wrapper.find(StyledSelectListContainer)
    );
  });
});

describe("coverage filler for else path", () => {
  const wrapper = renderSelect();
  simulateKeyDown(wrapper, "F1");
});

describe("when maxWidth is passed", () => {
  it("should be passed to InputPresentation", () => {
    const wrapper = renderSelect({ maxWidth: "67%" });

    assertStyleMatch(
      {
        maxWidth: "67%",
      },
      wrapper.find(InputPresentation)
    );
  });

  it("renders with maxWidth as 100% when no maxWidth is specified", () => {
    const wrapper = renderSelect({ maxWidth: "" });

    assertStyleMatch(
      {
        maxWidth: "100%",
      },
      wrapper.find(InputPresentation)
    );
  });
});
