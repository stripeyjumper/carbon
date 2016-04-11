import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Icon from './../icon';
import Bowser from 'bowser';
import classNames from 'classnames';

class Sidebar extends React.Component {

  listening = false;

  static propTypes = {

    /**
     * A custom close event handler
     *
     * @property onCancel
     * @type {Function}
     */
    onCancel: React.PropTypes.func.isRequired,

    /**
     * Sets the open state of the dialog
     *
     * @property open
     * @type {Boolean}
     * @default false
     */
    open: React.PropTypes.bool.isRequired,

    /**
     * Determines if the background is disabled
     * when the sidebar is open
     *
     * @property disableBackground
     * @type {Boolean}
     * @default true
     */
    disableBackground: React.PropTypes.bool
  }

  static defaultProps = {
    open: false
  }

  /**
   * Returns classes for the dialog.
   *
   * @method sidebarClasses
   * @return {String} sidebar className
   */
  get sidebarClasses() {
    return classNames(
      'ui-sidebar__sidebar',
      {
        [`ui-sidebar__sidebar--${this.props.size}`]: typeof this.props.size !== 'undefined'
      }
    );
  }

  /**
   * Returns classes for the component.
   *
   * @method mainClasses
   * @return {String} Main className
   */
  get mainClasses() {
    return classNames(
      'ui-sidebar',
      this.props.className
    );
  }


  /**
   * Returns HTML for the background.
   *
   * @method backgroundHTML
   * @return {Object} JSX
   */
  get backgroundHTML() {
    if (this.props.disableBackground) {
      return <div className="ui-sidebar__background"></div>;
    }
  }

  /**
   * Returns the computed HTML for the sidebar.
   *
   * @method sidebarHTML 
   * @return {Object} JSX for sidebar 
   */
  get sidebarHTML() {
    return (
      <div className={ this.sidebarClasses }>
        <Icon className="ui-sidebar__close" type="close" onClick={ this.props.onCancel } />
      </div>
    );
  }

  /**
   * Renders the component.
   *
   * @method render
   * @return {Object} JSX
   */
  render() {
    let backgroundHTML,
        sidebarHTML;

    if (this.props.open) {
      backgroundHTML = this.backgroundHTML;
      sidebarHTML= this.sidebarHTML;
    }

    return (
      <div className={ this.mainClasses }>
        <ReactCSSTransitionGroup
          transitionName="sidebar"
          transitionEnterTimeout={ 500 }
          transitionLeaveTimeout={ 500 } >
          { sidebarHTML }
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName="sidebar-background"
          transitionEnterTimeout={ 500 }
          transitionLeaveTimeout={ 500 } >
          { backgroundHTML }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Sidebar;
