import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL}) => {
  return (
    <li key={id} className={css.ImageGalleryItem }>       
      <img src={webformatURL} alt="" large={largeImageURL} className={css.ImageGalleryItem } />
  </li>
        )}    

    

export default ImageGalleryItem;
