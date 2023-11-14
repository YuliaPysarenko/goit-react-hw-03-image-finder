//  import React from "react";
// / const IPA_KEY = `37860129-0a816fc38343337d9878906bd`;
// import axios from "axios";  
const ipa_key= `37860129-0a816fc38343337d9878906bd`

function fetchPyxabay (nameFetch, pageFetch) {

   return fetch(
      `https://pixabay.com/api/?q=${nameFetch}&page=${pageFetch}&key=${ipa_key}&image_type=photo&orientation=horizontal&per_page=12`
   )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(
            `Нажаль картинок з вашим пошуком ${nameFetch}, не має`
          )
        );
      })
}

const ipa = {fetchPyxabay,}

export default ipa

// class PixabayIpa extends Component {
 
//   state = {
//     per_page: 12,
//     ipa_key:`37860129-0a816fc38343337d9878906bd`,
//   }
   
// async fetchPyxabay (name, page) {
//   const { per_page, ipa_key } = this.state;
  
//     return await axios.get(
//       `https://pixabay.com/api/?q=${name}&page=${page}&key=${ipa_key}&image_type=photo&orientation=horizontal&per_page=${per_page}`
//     )
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         return Promise.reject(
//           new Error(
//             `Нажаль картинок з вашим пошуком ${name}, не має`
//           )
//         );
//       })
// }
// }

// export default PixabayIpa;

// const ipa = { fetchPyxabay,}
// export default ipa;


// import axios from "axios

// export default class NewApiServis {
//     constructor() {
//       this.inputValue = '';
//       this.page = 1;
//       this.IPA_KEY = `37860129-0a816fc38343337d9878906bd`; 
//       this.total = '';
//       this.totalImg = '';
//       this.per_page = 40;
//     }

//   async fetchPixabay() {
   
//    const fetchResponsePixabay = await axios.get(`https://pixabay.com/api/?key=${this.IPA_KEY}&q=${this.inputValue}&image_type=photo&orientation=horizontal&safesearch=thue&per_page=40&page=${this.page}`)
//     const fetchJson =  fetchResponsePixabay.data.hits;
//     this.totalImg =  fetchResponsePixabay.data.totalHits;
 
//     this.incrementPage();
//     this.remainderInTotalHits();
  
//     return fetchJson;
//   }
  
//   remainderInTotalHits() {
//      this.total = this.totalImg - this.page * this.per_page; 
// }

//  incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   // simpleLitgthBoxes() {
//   //    SimpleLightbox.refresh();
//   // }
// }