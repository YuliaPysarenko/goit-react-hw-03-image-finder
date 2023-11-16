import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import Modal from "./Modal";
import PixabayIpa from "./servises/pixabay-api"

class App extends Component {
 
  state = {
    name: '',
    items: [],
    totalHits: 0,
    page: 1,
    per_page: 12,
    showButton: false,
    largeImg: '',
    status: 'idle'
  }

  componentDidUpdate(_, prevState) {
    const {name,page,totalHits} = this.state
    if ( prevState.name !== name || prevState.page !== page) {
      this.onFetchPixabey(name, page).then(() => {
        if (totalHits > 0) {
          this.remainderInTotalHits();
        }
      });
    }
     };
    
   
   onFetchPixabey = () => {
     const { name, page } = this.state;
     this.setState({ status: 'pending' });

    return PixabayIpa
     .fetchPyxabay(name,page)
      .then(data => {
        this.setState(prevState => ({
          items: [...prevState.items, ...data.hits],
          totalHits: data.totalHits,
          showButton: true,
          status:'resolved'
        }));
      })
      .catch(error => this.setState({ error, status: 'rejected' }))
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
    })
  }
  
  toggalModal = () => {
    if (this.state.largeImg !== '') {
      this.setState({
      largeImg: ''
 })
    }  
  }  

  render() {
    const { items, error, showButton, largeImg, status } = this.state;
    
    if (status === 'idle') {
       return <Searchbar onSubmit={this.handleFormSabmit} />
    }

    if (status === 'rejected') {
      return <div><p>{error.message}</p></div>
    }

    if (status === 'pending') {
      return <Loader/>
    }
     
    if (status === 'resolved') { 
 
     return <div>
      {items && <ImageGallery items={items} onOpenLarge={this.largeImage}/>}
      {showButton && <Button onLoadMore={this.incrementPage} />}
       {largeImg && <Modal closeModal={this.toggalModal}>
         <img src={largeImg} alt="" width="800" height="600" />
       </Modal>}
      </div>
    }
    // return (
     
    //   <div>
    //    <Searchbar onSubmit={this.handleFormSabmit} />
    //     {error && <div><p>{error.message}</p></div>}
    //     {loading && <Loader />}
    //     {items && <ImageGallery items={items} onOpenLarge={this.largeImage}/>}
    //     {showButton && <Button onLoadMore={this.incrementPage}/>}
    //    {/* {largeImg && <Modal large={largeImg} closeModal={this.toggalModal} />}        */}
    //    {largeImg && <Modal closeModal={this.toggalModal}><img src={largeImg} alt="" width="800" height="600" />
    //    </Modal>}
    //   </div>
    // )
  }
}

export default App;
  