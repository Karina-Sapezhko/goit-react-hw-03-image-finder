import React from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

export function Searchbar({ getQuery }) {
  const hendleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.forEach((value, name) => {
      return getQuery(value);
    });
  };
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={hendleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          name="query"
          autoFocus
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propType = {
  getQuery: PropTypes.func.isRequired,
};
