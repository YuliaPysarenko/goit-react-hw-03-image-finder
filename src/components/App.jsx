import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
// import axios from "axios";

//  import css from './App.module.css';

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

  }
   

  
  componentDidUpdate(prevProps, prevState) {
    // if (prevState.name !== this.state.name) {
    //   this.setState({ page: 1, items: [], showButton: false });
    // }
      // if (this.state.page === 1) {
      //   this.onFetchPixabey();
      // }

    if (prevState.name !== this.state.name) {
      this.setState({ loading: true })
       this.onFetchPixabey();
    }

     if (prevState.page !== this.state.page) {
          this.setState({ loading: true })
      this.onFetchPixabey();
      //  this.remainderInTotalHits()
      // this.incrementPage()
    }
 
  }

//  fetchPixabay = async () => {
//    const fetchResponsePixabay = axios.get(`https://pixabay.com/api/?q=${this.state.name}&page=1&key=${IPA_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//    .then(response => {
//           if (response.ok) {
//             return response.json()
//           }
//           return Promise.reject(
//             new Error(`Нажаль картинок з вашим пошуком ${this.state.name}, не має`)
//           );
//         })
//      .then(result => this.setState({ items: result.hits, showButton: true }))
//      .catch(error => this.setState({error}))
//      .finally(() => this.setState({ loading: false }))
   
//     // const fetchJson =  fetchResponsePixabay.data.hits;
//     // this.totalImg =  fetchResponsePixabay.data.totalHits;
 
//     this.incrementPage();
//     this.remainderInTotalHits();
  
//     //  return fetchJson;
//    }
  
  onFetchPixabey = () => {
    fetch(`https://pixabay.com/api/?q=${this.state.name}&page=1&key=${IPA_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(
          new Error(`Нажаль картинок з вашим пошуком ${this.state.name}, не має`)
        );
      })
        // .then(data => this.setState({items: [...data.hits], showButton: true}))
      // .then(data => this.setState(prevState => ({items: [prevState.items, ...data.hits], showButton: true}))) 
        .then(data => this.setState(prevState => ({items: [ ...prevState.items, ...data.hits], showButton: true}))) 
      //  .then(data => this.setState(prevState => ({items: [...data.hits, prevState.items], showButton: true})))
      // .then(data=> this.setState({ items: [...data.hits, items], showButton: true }))
     .catch(error => this.setState({error}))
     .finally(() => this.setState({loading: false}))
    
      // this.incrementPage();
      // this.remainderInTotalHits();
    
  }
  
  remainderInTotalHits = () => {
    const total = this.state.totalHits - this.state.page * this.state.per_page; 
    this.setState({total: total})
}

  incrementPage = () => {
    this.setState(prevState =>({ page: prevState.page + 1}))
    // this.page += 1;
  }

  resetPage = () => {
    this.page = 1;
  }

  handleFormSabmit = (nameForm) => {
    this.setState({
      name: nameForm,
      //  items: [],
    })
    //  this.onFetchPixabey();
  }

 isAndTotalImage() {
   if (this.totalHits <= 12) {
     this.setState({showButton: false})
  } 
  }
  
  render() {
    const { items } = this.state;
    const { loading } = this.state;
    const { error } = this.state;
    const { showButton } = this.state;
 
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSabmit} />
        <div>
       {error && <div><p>{error.message}</p></div>}
         {loading && <div>Loading</div>}
           {items && <ImageGallery items={items} />}  
            {showButton && <Button onLoadMore={this.incrementPage} />} 
       
        </div>
      </div>
    )
    }
}

export default App;
  