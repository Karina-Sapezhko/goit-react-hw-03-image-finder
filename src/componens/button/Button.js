import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ getGallery }) => (
  <div className={styles.boxButton}>
    <button type="button" className={styles.Button} onClick={getGallery}>
      Load more
    </button>
  </div>
);

Button.propType = {
  getGallery: PropTypes.func.isRequired,
};
