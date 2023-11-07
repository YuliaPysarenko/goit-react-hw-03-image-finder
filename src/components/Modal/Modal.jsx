import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector(`#modal-root`);
// import * as basicLightbox from 'basiclightbox'

// function Modal() {

//        instance = basicLightbox.create(`
//      <div className=${css.Overlay}>
//         <div className=${css.Modal}>
  
//   </div>
//   </div>
// `)
    

// instance.show()
// }

class Modal extends Component {

  componentDidMount() {
    window.addEventListener(`keydown`, this.handelEscape);
  }

  componentWillUnmount() {
    window.removeEventListener(`keydown`, this.handelEscape);
  }

  handelEscape = (e) => {
    // if (e.target) {
    //   this.props.closeClick()
    // }
    if (e.code === `Escape`) {
      this.props.closeClick()
    }
  }
 
  handelBeckdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.closeClick()
  }
}

  render() {
    return createPortal(
    <div className={css.Overlay} onClick={this.handelBeckdropClick}>
        <div className={css.Modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    )
  }

}

// item.largeImageURL
export default Modal;