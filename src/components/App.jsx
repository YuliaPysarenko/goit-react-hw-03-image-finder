import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import Modal from "./Modal";
import PixabayIpa from "./servises/pixabay-api"

// const pixabayIpa = new PixabayIpa();
//  const IPA_KEY = `37860129-0a816fc38343337d9878906bd`;

class App extends Component {
 
  state = {
    name: '',
    items: [],
    totalHits: 0,
    page: 1,
    per_page: 12,
    // total: 0,
    // loading: false,
    showButton: false,
    largeImg: '',
    status: 'idle'
  }

  componentDidUpdate(_, prevState) {
    const {name,page,totalHits} = this.state
    // if ( prevState.name !== name || prevState.page !== page) {
    //   this.onFetchPixabey(name, page).then(() => {
    //     if (totalHits > 0) {
    //       this.remainderInTotalHits();
    //     }
    //   });
    // }

    if (prevState.name !== name || prevState.page !== page) {
      this.onFetchPixabey(name, page)
        if (totalHits > 0) {
          // this.onFetchPixabey(name,page)
           this.remainderInTotalHits();    
        }
    }
     };
    
      
    // const {totalHits} = await fetchPyxabay(name, page)
    //     if (totalHits > 0) {
    //       this.remainderInTotalHits();
    //     }
    // }
  
  
  // onFetchPixabey = async () => {
  //   this.setState({ loading: true });
  //   const { name, page} = this.state;

  //   try {
  //     await fetchPyxabay(name, page)
  //     .then(data => {
  //       this.setState(prevState => ({
  //         items: [...prevState.items, ...data.hits],
  //         totalHits: data.totalHits,
  //         showButton: true,
  //       }));
  //     })
  //   }
  //   catch {
  //    (error => this.setState({ error }))
  //   }
  // };
  

   onFetchPixabey = () => {
     const { name, page } = this.state;
     this.setState({ status: 'pending' });

     PixabayIpa
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



  //   onFetchPixabey = () => {
  // //   this.setState({loading:true});
  //   this.setState({status: 'pending'});
  //   const {name,page,per_page} = this.state
  //   return fetch(
  //     `https://pixabay.com/api/?q=${name}&page=${page}&key=${IPA_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
  //   )
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       return Promise.reject(
  //         new Error(
  //           `Нажаль картинок з вашим пошуком ${name}, не має`
  //         )
  //       );
  //     })
  //     .then(data => {
  //       this.setState(prevState => ({
  //         items: [...prevState.items, ...data.hits],
  //         totalHits: data.totalHits,
  //         showButton: true,
  //         status:'resolved'
  //       }));
  //     })
  //     .catch(error => this.setState({ error, status: 'rejected' }))
  //     // .finally(() => this.setState({ loading: false }));
  // };

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
  