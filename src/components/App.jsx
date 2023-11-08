import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import Modal from "./Modal";
// import * as basicLightbox from 'basiclightbox'
const IPA_KEY = `37860129-0a816fc38343337d9878906bd`;

class App extends Component {
 
  state = {
    name: '',
    items: [],
    totalHits: 0,
    page: 1,
    per_page: 12,
    total: 0,
    loading: false,
    showButton: false,
    showModal: false,
    largeImg: ''
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      this.onFetchPixabey().then(() => {
        if (this.state.totalHits > 0) {
          this.remainderInTotalHits();
        }
      });
    }

    // if (prevState.largeImg !== this.state.largeImg) {
    //   this.setState
    // }
  }
  
  onFetchPixabey = () => {
    this.setState({ loading: true });
    return fetch(
      `https://pixabay.com/api/?q=${this.state.name}&page=${this.state.page}&key=${IPA_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(
            `Нажаль картинок з вашим пошуком ${this.state.name}, не має`
          )
        );
      })
      .then(data => {
        this.setState(prevState => ({
          items: [...prevState.items, ...data.hits],
          totalHits: data.totalHits,
          showButton: true,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  remainderInTotalHits = () => {
    const { totalHits, items } = this.state;
    const countOfNotRenderesItems = totalHits - items.length;
    if (countOfNotRenderesItems <= 12) {
      this.setState({ showButton: false });
    }
  };
  
  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  // resetPage = () => {
  //   this.state.page = 1;
  // }

  handleFormSabmit = nameForm => {
    this.setState({
      name: nameForm,
      items: [],
      page: 1,
    });
  };

  largeImage = (largeImageURL) => {
    this.setState({
      largeImg: largeImageURL,
      showModal: true
    })
    //    this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact=> contact.id !== idcontact)
    //    }))
    //    this.setState(prevState => ({
    //   largeImg: prevState.filter(large=> large.largeImageURL !== largeImageURL)
    // }))
  }

  toggalModal = () => {
      this.setState(modal => ({
        showModal: !modal.showModal
      }))
  }  
  
  render() {
    const { items } = this.state;
    const { loading } = this.state;
    const { error } = this.state;
    const { showButton } = this.state;
    // const { showModal } = this.state;
    // const { largeImg } = this.state;
 
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSabmit}/>
        {error && <div><p>{error.message}</p></div>}
        {loading && <Loader />}
        {items && <ImageGallery items={items} onOpenLarge={this.largeImage}/>}
        {showButton && <Button onLoadMore={this.incrementPage}/>}
     
        {/* <Modal large={largeImg}/> */}
            <Modal/>
      </div>
    )
  }
}

export default App;
  