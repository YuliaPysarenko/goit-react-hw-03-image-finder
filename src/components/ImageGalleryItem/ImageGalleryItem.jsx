import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ id, largeImageURL, webformatURL, openLargeImg }) => {

  return (
    <li key={id} className={css.ImageGalleryItem} onClick={() => openLargeImg(largeImageURL)}>
      <img src={webformatURL} large={largeImageURL} alt="" className={css.ImageGalleryItemImage}/>
        </li>
  )
}

// function ImageGalleryItem ({ id, largeImageURL, webformatURL, openLargeImg }) {

//   return (
//     <li key={id} className={css.ImageGalleryItem} onClick={() => openLargeImg(largeImageURL)}>
//       <img src={webformatURL} large={largeImageURL} alt="" className={css.ImageGalleryItemImage}/>
//         </li>
//   )
// }

ImageGalleryItem.protoType = {
    id: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    openLargeImg: PropTypes.func.isRequired,
   
}
     
export default ImageGalleryItem;
