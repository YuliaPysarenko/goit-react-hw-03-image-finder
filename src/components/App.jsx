import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem";

const IPA_KEY = `37860129-0a816fc38343337d9878906bd`;
class App extends Component {
 
  state = {
    name: '',
    items: [],
    totalHits: 0,
  }
   
  
  componentDidUpdate(prevProps, prevState) {
  
    if (prevState.name !== this.state.name) {
      this.setState({ loading: true })
      fetch(`https://pixabay.com/api/?q=${this.state.name}&page=1&key=${IPA_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(
            new Error(`Нажаль картинок з вашим пошуком ${this.state.name}, не має`)
          );
        })
        // .then(hits  => this.setState(prevState => ({ items: prevState.items, ...hits })))
     .then(result  => this.setState({ items: result.hits }))
        // .then(response => response.images)
        //  .then(images => this.setState({ items: [...images] }))
        // .then(images => this.setState({ items: [images] }))
      
        .catch(error => this.setState({error}))
        .finally(() => this.setState({ loading: false })) 
    }
  }



  handleFormSabmit = (nameForm) => {
    this.setState({
      name: nameForm,
       items: [],
    })
  }

  render() {
    const { items } = this.state;
    const { loading } = this.state;
    const { error } = this.state;
    // const { name } = this.props;

    return (
     
      <div>
    
        <Searchbar onSubmit={this.handleFormSabmit} />
        <div>
        {error && <div><p>{error.message}</p></div>}
        {loading && <div>Loading</div>}
          {items && <ul>
            {items.map(({item}) =>
              <li key={item.id}>
              <img src={item.webformatURL}  large={item.largeImageURL} alt="" />
            </li>
           )}

         
          </ul>}
        </div>
        {/* <ImageGallery name={this.state.name} hits={this.state.items } />  */}
        <ImageGallery/>
        <ImageGalleryItem/> 
      </div>
    )
  }
}

export default App;
  