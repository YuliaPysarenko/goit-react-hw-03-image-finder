import { Component } from 'react';
import css from './Button.module.css';
// import React from "react";

class Button extends Component {
 
   onButtonClick = () => {
       this.props.onLoadMore();
       this.props.totalHits();
     
   }

    render() {
           return (
        <div>
            <button onClick={this.onButtonClick}  className={css.Button} type="button">Load more</button>
        </div>  
    )
    }
}

// function Button (onLoadMore) {
//     return (
//        <div>
//             <button onClick={onLoadMore} className={css.Button} type="button">Load more</button>
//         </div>  
//     )
//  }

export default Button;