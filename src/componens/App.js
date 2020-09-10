import React, { Component } from 'react';
import { Modal } from './modal/Modal';
import { fetchGallery } from './services/api';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Button } from './button/Button';
import { Spinner } from './spinner/Spinner';
import styles from './App.module.css';

class App extends Component {
  state = {
    gallery: [],
    query: '',
    page: 1,
    largeImage: '',
    showModal: false,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      this.getGallery(query);
    }
  }

  getQuery = query => {
    this.setState({ query, page: 1, gallery: [], error: null });
  };

  getGallery = query => {
    this.setState({ loading: true });

    const options = {
      query,
      page: this.state.page,
    };

    fetchGallery(options)
      .then(hits => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  getLargeImage = url => {
    this.setState({ largeImage: url });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const {
      showModal,
      loading,
      gallery,
      largeImage,
      error,
      query,
    } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar getQuery={this.getQuery} />

        {error && <h1>Sorry there was an error</h1>}

        <ImageGallery
          gallery={gallery}
          toggleModal={this.toggleModal}
          getLargeImage={this.getLargeImage}
        />

        {loading ? (
          <Spinner />
        ) : (
          gallery.length > 0 && (
            <Button getGallery={this.getGallery} query={query} />
          )
        )}

        {showModal && (
          <Modal toggleModal={this.toggleModal} largeImage={largeImage} />
        )}
      </div>
    );
  }
}
export default App;
