import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector(`#modal-root`);

class Modal extends Component {
  state = {
    // showModal: false,
    // largeImage: '',
  }
  
  // componentDidMount() {
  //   window.addEventListener(`keydown`, this.handelEscape);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener(`keydown`, this.handelEscape);
  // }

  // handelEscape = (e) => {
  //   if (e.code === `Escape`) {
  //     this.setState({
  //       showModal: false
  //     })
  //   }
  // }
  
  //   toggalModal = () => {
  //     this.setState(modal => ({
  //       showModal: !modal.showModal
  //     }))
  // }
  

  // propsLargeImg = (e) => {
  //   if (e.target) {
  //     this.props.large();
  //     this.setState({
  //       showModal: true
  //     })
  //   }
  // }
  
  // propsLargeImg = () => {
  //   this.props.large(
  //     this.setState({
  //     showModal: true
  //   }));
  // }
  
//   propsLargeImg = (largeImg) => {
//     // this.props.large(this.state.largeImage);
// //     if (this.props.large) {
// //          this.setState({
// //   // largeImage: this.props.large(),
// //      largeImage: largeImg,
// //       showModal:true,
// // })
// //     }
//     this.setState({
//       largeImg: largeImg,
//       // showModal: true
//  })
//   }
   
  
    //  showModalLargeImg = () => {
     
    //    console.log(this.props.large)
    //    this.props.large();
    // }
  
  render() {
     const { large } = this.props;
    //  console.log(this.props.large)
    
       return createPortal(
       <div className={css.Overlay}>
      <div className={css.Modal}> 
       {/* <img src={large} alt="" width="800" height="600"/>  */}
      <img src={this.props.large} alt="" width="800" height="600"/>
       
      </div>
    </div>,
      modalRoot,)
  }
  }

// Варіант 2
// class Modal extends Component {
 
//    showModalLargeImg = () => {
//         this.props.large();
//     }
    

//     render() {
//         return (
//          <div className={css.Overlay}>
//       <div className={css.Modal}> 
//              {/* <img src={large} alt="" width="800" height="600"/> */}
//               <img src={this.showModalLargeImg} alt="" width="800" height="600"/> 
//       </div>
//     </div>  
//     )}
// }


// // Варіант3 
// const Modal = ({large}) => {
//   return (
//    <div className={css.Overlay}>
//       <div className={css.Modal}> 
//       <img src={large} alt="" width="800" height="600"/>   
//       </div>
//     </div>  
//   );
// }
export default Modal;