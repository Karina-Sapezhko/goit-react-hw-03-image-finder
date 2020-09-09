import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  getLargeImage,
  toggleModal,
}) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={webformatURL}
      alt="photo"
      className={styles.ImageGalleryItemImage}
      onClick={() => {
        getLargeImage(largeImageURL);
        toggleModal();
      }}
    />
  </li>
);

ImageGalleryItem.propType = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  getLargeImage: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
