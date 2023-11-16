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
