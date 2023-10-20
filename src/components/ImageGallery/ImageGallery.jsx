import React, { Component } from "react";
import css from './ImageGallery.module.css';
// import ImageGalleryItem from "components/ImageGalleryItem";

// const IPA_KEY = `37860129-0a816fc38343337d9878906bd`;

class ImageGallery extends Component {
    state = {
      // items: [],
    
      // loading: false,
      // error: null,
  
    }

  // componentDidUpdate(prevProps, prevState) {
  
  //   if (prevProps.name !== this.props.name) {
  //    this.setState({loading:true})
  //     fetch(`https://pixabay.com/api/?q=${this.props.name}&page=1&key=${IPA_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
  //       .then(response => {
  //         if (response.ok) {
  //           return response.json()
  //         }
  //         return Promise.reject(
  //           new Error(`Нажаль картинок з вашим пошуком ${this.state.name}, не має`)
  //         );
  //       })
  //       .then(images => this.setState(prevState => ({ items: prevState.items, ...images })))
  //       // .then(response => response.images)
  //       //  .then(images => this.setState({ items: [...images] }))
  //       // .then(images => this.setState({ items: [images] }))
      
  //       .catch(error => this.setState({error}))
  //       .finally(() => this.setState({ loading: false }))
  //   }
  // }


//   ImageGalleryMap = ({images }) => {
//     return (<ul className={css.ImageGallery}>
//       {images.map(({ id, webformatURL, largeImageURL }) =>
//         <ImageGalleryItem
//                 key={id}
//                 webformatURL={webformatURL}
//                 largeImageURL={largeImageURL} /> )
//             }
//       {/* {images.map((image) => {
//           return <li key={image.id} className={css.ImageGalleryItem }>
//       <img src={image.webformatURL} alt="" large={image.largeImageURL} className={css.ImageGalleryItem } />
//   </li>})
//             }  */}

//     </ul>)
// }

  render() {
    // const { items } = this.state;
    // const { loading } = this.state;
    // const { error } = this.state;
    // const { name } = this.props;
    
    // console.log(items)
    return (
      <div>
        <ul className={css.gallery}>
   
        </ul>
        {/* {error && <div><p>{error.message}</p></div>}
        {loading && <div>Loading</div>}
        {items && <ul className={css.ImageGallery}>
          {items.map(({ id, webformatURL, largeImageURL }) =>
           <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />)}

      </ul>} */}
    </div>
     )
    
   
   }
  
}




export default ImageGallery;
