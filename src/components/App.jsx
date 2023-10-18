import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem";


class App extends Component {
 
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
  