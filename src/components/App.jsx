import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
// import axios from "axios";
// import ImageGalleryItem from "./ImageGalleryItem";
// import css from './App.module.css';

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
  
    if (prevState.name !== this.state.name) {
      this.setState({ loading: true })

      //  this.fetchPixabay();
       this.onFetchPixabey();
      
      
    //   fetch(`https://pixabay.com/api/?q=${this.state.name}&page=1&key=${IPA_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    //     .then(response => {
    //       if (response.ok) {
    //         return response.json()
    //       }
    //       return Promise.reject(
    //         new Error(`Нажаль картинок з вашим пошуком ${this.state.name}, не має`)
    //       );
    //     })
    //     // .then(hits  => this.setState(prevState => ({ items: prevState.items, ...hits })))
    //  .then(result  => this.setState({ items: result.hits, showButton: true}))
    //     // .then(response => response.images)
    //     //  .then(images => this.setState({ items: [...images] }))
    //     // .then(images => this.setState({ items: [images] }))
      
    //     .catch(error => this.setState({error}))
    //     .finally(() => this.setState({ loading: false })) 
    }
    // if (this.prevState === this.state.name) {
    //   return <div> <button type="button">Load more</button></div>
    // }
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
      // .then(data => this.setState({ items: data.hits, showButton: true }))
     .then(data => this.setState(prevState => ({items: [ ...prevState.items, ...data.hits], showButton: true}))) 
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
    this.setState(prevState =>({ page: prevState.page +=1}))
    // this.page += 1;
  }

  resetPage = () => {
    this.page = 1;
  }


  // onFetchPixabey = () => { 
  //   this.setState({ loading: true })
  //    fetch(`https://pixabay.com/api/?q=${this.state.name}&page=1&key=${IPA_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
  //       .then(response => {
  //         if (response.ok) {
  //           return response.json()
  //         }
  //         return Promise.reject(
  //           new Error(`Нажаль картинок з вашим пошуком ${this.state.name}, не має`)
  //         );
  //       })
  //      .then(result => this.setState({ items: result.hits, showButton: true }))
       
  //       // .then(response => response.images)
  //       //  .then(images => this.setState({ items: [...images] }))
  //       // .then(images => this.setState({ items: [images] }))
      
  //       .catch(error => this.setState({error}))
  //       .finally(() => this.setState({ loading: false })) 
  // }
  
  handleFormSabmit = (nameForm) => {
    this.setState({
      name: nameForm,
      //  items: [],
    })
    //  this.onFetchPixabey();
  }

  // onClickButton = async () => {
  //   const render = await this.fetchPixabay();
  //   // const renderRes = ImageGallery(render);
  //   const finishImg = this.isAndTotalImage(render);
  //   //  this.onFetchPixabey()
  // }

    onClickButton = () => {
      this.onFetchPixabey()
      // this.setState(prevState => ({
      // items: [...prevState.items, items], 
      // loading: false,
      // }))
      this.incrementPage();
      this.remainderInTotalHits();
  }

  //   onClickButton = () => {
     
  //     this.setState(prevState => ({
  //     items: [...prevState.items, items], 
  //     loading: false,
  //     })) 
  // }
  
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
            {showButton && <Button onClick={() => this.onClickButton()} />} 
               {/* {showButton && <Button onClick={this.onFetchPixabey} />} */}
        </div>
      </div>
    )
    }
}

export default App;
  