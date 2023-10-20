import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem";


class App extends Component {
 
  state = {
    name: '',
    items: [],
    totalHits: 0,
  }
    

  handleFormSabmit = (nameForm, hits) => {
    this.setState({
      name: nameForm,
      // items: hits,
    })
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSabmit} />
        <ImageGallery name={this.state.name} hits={this.state.items } />
        <ImageGalleryItem/>
      </div>
    )
  }
}

export default App;
  