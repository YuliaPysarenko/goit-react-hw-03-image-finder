
//     fetchPixabay = async () => {
   
//    const fetchResponsePixabay = await axios.get(`https://pixabay.com/api/?q=${this.state.name}&page=1&key=${IPA_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//     const fetchJson =  fetchResponsePixabay.data.hits;
//     this.totalImg =  fetchResponsePixabay.data.totalHits;
 
//     this.incrementPage();
//     this.remainderInTotalHits();
  
//     return fetchJson;
//   }
  
//   remainderInTotalHits = () => {
//      this.total = this.totalImg - this.page * this.per_page; 
// }

//   incrementPage = () => {
//     this.setState(prevState =>({ page: prevState.page +=1}))
//     // this.page += 1;
//   }

//   resetPage = () => {
//     this.page = 1;
//   }