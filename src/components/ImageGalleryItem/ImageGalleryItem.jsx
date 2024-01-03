import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({largeImageURL, webformatURL, openLargeImg }) => {

  return (
    <li className={css.ImageGalleryItem} onClick={() => openLargeImg(largeImageURL)}>
      <img src={webformatURL} large={largeImageURL} alt="" className={css.ImageGalleryItemImage}/>
        </li>
  )
}

ImageGalleryItem.protoType = {
    id: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    openLargeImg: PropTypes.func.isRequired,
   
}
     
export default ImageGalleryItem;
