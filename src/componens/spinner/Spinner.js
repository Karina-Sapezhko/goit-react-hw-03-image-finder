import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.css';

export const Spinner = () => (
  <div className={styles.BoxSpinner}>
    <Loader
      type="TailSpin"
      color="#3f51b5"
      height={70}
      width={70}
      timeout={5000}
    />
  </div>
);
