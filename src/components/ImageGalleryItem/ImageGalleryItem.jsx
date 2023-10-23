import React from 'react';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({item}) {
  return (
    <li key={item.id} className={css.ImageGalleryItem}>
          <img src={item.webformatURL} large={item.largeImageURL} alt="" className={css.ImageGalleryItemImage} />
        </li>
  )
}
  
      
export default ImageGalleryItem;
