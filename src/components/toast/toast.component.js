import React from 'react';
import classNames from 'classnames';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Icon from '../icon';
import tagComponent from '../../utils/helpers/tags/tags';
import {
  ToastStyle,
  TypeIcon,
  ToastContentStyle,
  ToastWrapper,
  StyledPortal
} from './toast.style';
import OptionsHelper from '../../utils/helpers/options-helper';
import IconButton from '../icon-button';

class Toast extends React.Component {
  /** Classes to be applied to the component. */
  get componentClasses() {
    return classNames(
      this.props.className,
    );
  }

  closeIcon() {
    const { onDismiss } = this.props;
    if (!onDismiss) return null;

    return (
      <IconButton
        data-element='close'
        onAction={ onDismiss }
      >
        <Icon type='close' />
      </IconButton>
    );
  }

  /** Content rendered for the toast. */
  toastContent() {
    if (!this.props.open) return null;

    const {
      isCenter,
      variant,
      id,
      as,
      onDismiss,
      children
    } = this.props;

    const toastProps = {
      isCenter,
      variant: variant || as,
      id
    };

    return (
      <CSSTransition
        enter
        classNames='toast'
        timeout={ { appear: 1600, enter: 1500, exit: 500 } }
      >
        <ToastStyle
          className={ this.componentClasses }
          { ...tagComponent((this.props['data-component'] || 'toast'), this.props) }
          { ...toastProps }
        >
          <TypeIcon variant={ toastProps.variant }>
            <Icon type={ toastProps.variant } />
          </TypeIcon>
          <ToastContentStyle
            variant={ toastProps.variant }
            isDismiss={ onDismiss }
          >
            { children }
          </ToastContentStyle>
          { this.closeIcon() }
        </ToastStyle>
      </CSSTransition>
    );
  }

  render() {
    const {
      targetPortalId,
      isCenter
    } = this.props;

    return (
      <StyledPortal
        id={ targetPortalId }
        isCenter={ isCenter }
      >
        <ToastWrapper isCenter={ isCenter }>
          <TransitionGroup>
            { this.toastContent() }
          </TransitionGroup>
        </ToastWrapper>
      </StyledPortal>
    );
  }
}

Toast.propTypes = {
  /** Customizes the appearance in the DLS theme */
  variant: PropTypes.oneOf(OptionsHelper.colors),
  /** Customizes the appearance in a legacy theme through colour see the 'iconColorSets' for possible values) */
  as: PropTypes.oneOf(OptionsHelper.colors),
  /** Custom className */
  className: PropTypes.string,
  /** Custom id  */
  id: PropTypes.string,
  /** Component name */
  'data-component': PropTypes.string,
  /** The rendered children of the component. */
  children: PropTypes.node,
  /** Determines if the toast is open. */
  open: PropTypes.bool,
  /** Callback for when dismissed. */
  onDismiss: PropTypes.func,
  /** props used with flash component. Allow to center a component */
  isCenter: PropTypes.bool,
  /** Target Portal ID where the toast will render */
  targetPortalId: PropTypes.string
};

Toast.defaultProps = {
  as: 'warning',
  onDismiss: null,
  open: true,
  isCenter: false
};

export default Toast;
