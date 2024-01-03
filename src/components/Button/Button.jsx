// import { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

// class Button extends Component {
 
//    onButtonClick = () => {
//         this.props.onLoadMore();
//     }
    

//     render() {
//         return (
//             <div>
//             <button onClick={this.onButtonClick} className={css.Button} type="button">Load more</button>
//         </div>
//     )}
// }


const Button = ({ onLoadMore }) => {
      return (
            <div>
            <button onClick={() => onLoadMore()} className={css.Button} type="button">Load more</button>
        </div>  
    )
}


Button.protoType = {
  onLoadMore: PropTypes.func.isRequired,
}


export default Button;