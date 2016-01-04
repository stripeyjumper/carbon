import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import AnimatedMenuButton from './animated-menu-button';
import Row from 'components/row';
import Button from 'components/button';
import Pod from 'components/pod';
import Device from './../../utils/helpers/devices';

describe('AnimatedMenuButton', () => {
  let basicWidget, labelWidget, customClassWidget, rightWidget, largeWidget, contentWidget, button;

  beforeEach(() => {
    basicWidget = TestUtils.renderIntoDocument(
      <AnimatedMenuButton  />
    );

    labelWidget = TestUtils.renderIntoDocument(
      <AnimatedMenuButton label="Create..." />
    );

    customClassWidget = TestUtils.renderIntoDocument(
      <AnimatedMenuButton  className='quick-create'/>
    );

    rightWidget = TestUtils.renderIntoDocument(
      <AnimatedMenuButton  direction='right'/>
    );

    largeWidget = TestUtils.renderIntoDocument(
      <AnimatedMenuButton size='large'/>
    );

    contentWidget = TestUtils.renderIntoDocument(
      <AnimatedMenuButton>
        <Row>
          <Pod>
            <h2 className="title">Column 1</h2>
            PEEKABOO
          </Pod>
          <Pod>
            <h2 className="title">Column 2</h2>
            <Button>A Button</Button>
          </Pod>
          <Pod>
            <h2 className="title">Column 3</h2>
            <a href='#'>This will be a link</a>
          </Pod>
        </Row>
      </AnimatedMenuButton>
    );

    spyOn(basicWidget, 'setState').and.callThrough();
  });

  describe('a mouse enter event', () => {
    it('expands the menu', () => {
      TestUtils.Simulate.mouseEnter(basicWidget.refs.button);
      expect(basicWidget.setState).toHaveBeenCalledWith({open: true });
    });
  });

  describe('a mouse leave event', () => {
    it('contracts the menu', () => {
      TestUtils.Simulate.mouseLeave(basicWidget.refs.button);
      expect(basicWidget.setState).toHaveBeenCalledWith({open: false });
    });
  });

  describe('focusing on the button', () => {
    it('opens the menu', () => {
      TestUtils.Simulate.focus(basicWidget.refs.button);
      expect(basicWidget.setState).toHaveBeenCalledWith({open: true });
    });
  });

  describe('losing focus of the menu', () => {
    it('closes the menu', () => {
      TestUtils.Simulate.blur(basicWidget.refs.button);
      expect(basicWidget.setState).toHaveBeenCalledWith({open: false });
    });
  });

  describe('a touch event', () => {
    describe('when the menu is open', () => {
      beforeEach(() => {
        basicWidget.setState({ open: true });
      });

      it('closes the menu', () => {
      TestUtils.Simulate.touchEnd(basicWidget.refs.button);
      expect(basicWidget.state.open).toBeFalsy();
      });
    });

    describe('when the menu is closed', () => {
      beforeEach(() => {
        basicWidget.setState({ open: false });
      });

      it('opens the menu', () => {
      TestUtils.Simulate.touchEnd(basicWidget.refs.button);
      expect(basicWidget.state.open).toBeTruthy();
      });
    });
  });

  describe('labelHTML', () => {
    describe('when no label is passed', () => {
      it('returns an empty string', () => {
        expect(basicWidget.labelHTML).toBeFalsy();
      });
    });

    describe ('when a label is passed', () => {
      it('returns the HTML for the label', () => {
        expect(labelWidget.labelHTML.props.className).toEqual('ui-animated-menu-button__label');
        expect(labelWidget.labelHTML.props.children).toEqual('Create...');
      });
    });
  });

  describe('innerHTML', () => {
    it('returns the HTML for the content', () => {
      expect(contentWidget.innerHTML.props.className).toEqual('ui-animated-menu-button__content');
      expect(contentWidget.innerHTML.props.children.length).toEqual(3);
    });

    describe('when it is a touch device', () => {
      it('adds a close icon to the content HTML', () => {
        basicWidget.setState({ touch: true });
        expect(basicWidget.innerHTML.props.children[1].props.children.props.type).toEqual('close');
      });
    });

    describe('when it is not a touch device', () => {
      it('does not add a close icon to the content HTML', () => {
        basicWidget.setState({ touch: false });
        expect(basicWidget.innerHTML.props.children[1]).not.toBeDefined();
      });
    });
  });

  describe('mainClasses', () => {
    describe('a basic widget', () => {
      it('returns the default main classes', () => {
        expect(basicWidget.mainClasses).toMatch('ui-animated-menu-button');
        expect(basicWidget.mainClasses).toMatch('ui-animated-menu-button--medium');
        expect(basicWidget.mainClasses).toMatch('ui-animated-menu-button--left');
        expect(basicWidget.mainClasses).toMatch('');
      });
    });

    describe('when a custom class is provided', () => {
      it('returns the custom class name as well', () => {
        expect(customClassWidget.mainClasses).toMatch('quick-create');
      });
    });

    describe('when a different opening direction or size is specified', () => {
      it('adds the corresponding classNames', () => {
        expect(rightWidget.mainClasses).toMatch('ui-animated-menu-button--right');
        expect(largeWidget.mainClasses).toMatch('ui-animated-menu-button--large');
      });
    });
  });

  describe('inputProps', () => {
    describe('when it is a touch device', () => {
      it('adds a touch handler', () => {
        basicWidget.setState({ touch: true });
        expect(basicWidget.inputProps.onTouchEnd).toBeDefined();
      });
    });

    describe('when it is not a touch device', () => {
      it('does not add the touch handler', () => {
        basicWidget.setState({ touch: false });
        expect(basicWidget.inputProps.onTouchEnd).toBeFalsy();
      });
    });
  });

  describe('closeIcon', () => {
    it('returns the HTML for the close Icon', () => {
      expect(basicWidget.closeIcon.props.children.props.type).toEqual('close');
    });
  });

  describe('render', () => {
    describe('when the menu is expanded', () => {
      it('renders the content', () => {
        TestUtils.Simulate.mouseEnter(basicWidget.refs.button);
        var t = TestUtils;
        debugger
        expect(TestUtils.scryRenderedDOMComponentsWithClass(basicWidget, 'ui-animated-menu-button__content').length).toEqual(1);
      });
    });

    describe('when the menu is closed', () => {
      it('does not render the content', () => {
        expect(TestUtils.scryRenderedDOMComponentsWithClass(basicWidget, 'ui-animated-menu-button__content').length).toEqual(0);
      });
    });
  });
});
