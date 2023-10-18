import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem";


class App extends Component {
  // const IPA_KEY = `37860129-0a816fc38343337d9878906bd`;

  // {/* https://pixabay.com/api/?q=cat&page=1&key=${IPA_KEY }&image_type=photo&orientation=horizontal&per_page=12 */ }
 
  state = {
    name: '',
  }
    

  handleFormSabmit = (nameForm) => {
    this.setState({name: nameForm})
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSabmit} />
        <ImageGallery name={this.state.name} />
        <ImageGalleryItem/>
      </div>
    )
  }
}

export default App;
  