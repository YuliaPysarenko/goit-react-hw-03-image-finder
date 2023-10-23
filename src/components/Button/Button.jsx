import css from './Button.module.css';


// class Button extends Component {
 
//     state = {
//         totalHits: 0,
//         page: 1,
//         per_page: 12,
//         total: 0,
//         showButton: false,
//   }
  
//   componentDidUpdate(prevProps, prevState) {
  
//     if (prevState.page) {
//       //  await this.fetchPixabay();
//     //  this.onFetchPixabey();
//       this.props.onClick()
      
//     }
//   }

//  remainderInTotalHits = () => {
//      this.total = this.totalImg - this.page * this.per_page; 
// }

//   incrementPage = () => {
//     this.setState(prevState =>({ page: prevState.page +=1}))
//     // this.page += 1;
//   }

//   resetPage = () => {
//     this.page = 1;
//   }
  

//     render() {
//            return (
//         <div>
//             <button  onClick={onClick} className={css.Button} type="button">Load more</button>
//         </div>  
//     )
//     }
// }

 function Button(onClick) {
    return (
       <div>
            <button onClick={onClick} className={css.Button} type="button">Load more</button>
        </div>  
    )
 }

export default Button;