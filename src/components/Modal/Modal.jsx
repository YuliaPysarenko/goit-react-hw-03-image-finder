import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';


const modalRoot = document.querySelector(`#modal-root`);

class Modal extends Component {
  state = {
  showModal: false
  }
  
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
      this.setState({
        showModal: false
      })
    }
  }
  
    toggalModal = () => {
      this.setState(modal => ({
        showModal: !modal.showModal
      }))
  }  
  

  propsLargeImg = (e) => {
    if (e.target) {
      this.props.large();
      this.setState({
        showModal: true
      })
    }
 
  }
  render() {
    return createPortal(
       <div className={css.Overlay} >
      <div className={css.Modal} onClick={this.handelEscape}>
          <img src={this.propsLargeImg} alt=""/>
      </div>
    </div>,
      modalRoot,)
  } 
}

// class Modal extends Component {

//   componentDidMount() {
//     window.addEventListener(`keydown`, this.handelEscape);
//   }

//   componentWillUnmount() {
//     window.removeEventListener(`keydown`, this.handelEscape);
//   }

//   handelEscape = (e) => {
//     // if (e.target) {
//     //   this.props.closeClick()
//     // }
//     if (e.code === `Escape`) {
//       this.props.closeClick()
//     }
//   }
 
//   handelBeckdropClick = (e) => {
//     if (e.currentTarget === e.target) {
//       this.props.closeClick()
//     }
    
//     // if (e.target) {
//     //      if (e.target) {
//     //    this.setState(modal => ({
//     //   showModal: !modal.showModal
//     // }))
//     // }
//     // }
//   }
//   // onClick = { this.handelBeckdropClick }
//  ImageGalleryItem = ({item}) => {
//   return (
//     <img src={item.largeImageURL} alt="" width="800" height="600" onClick={this.toggalModal} />
//   )
// }
//   render() {
//     return createPortal(
//     <div className={css.Overlay} >
//         <div className={css.Modal}>{this.props.children}</div>
//       </div>,
//       modalRoot,
//     )
//   }

// }

// // item.largeImageURL

export default Modal;