import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector(`#modal-root`);

class Modal extends Component {
  
  componentDidMount() {
    window.addEventListener(`keydown`, this.handelEscape);
  }

  componentWillUnmount() {
    window.removeEventListener(`keydown`, this.handelEscape);
  }

  handelEscape = (e) => {
    if (e.code === `Escape`) {
      this.props.closeModal()
    }
  }

  handelOverlay = (e) => {
    if (e.currentTarget === e.target) {
      this.props.closeModal()
    }
  }
   
  render() {
       return createPortal(
       <div className={css.Overlay} onClick={this.handelOverlay}>
      <div className={css.Modal}>{this.props.children}
      </div>
    </div>,
      modalRoot,)
  }
  }

  Modal.protoType = {
  closeModal: PropTypes.func.isRequired,
}

export default Modal;

  // render() {
  //    const { large } = this.props;
    
  //      return (
  //      <div className={css.Overlay} onClick={this.handelOverlay}>
  //     <div className={css.Modal}> 
  //      <img src={large} alt="" width="800" height="600"/>   
  //     </div>
  //   </div>)
  // }
  // }

  