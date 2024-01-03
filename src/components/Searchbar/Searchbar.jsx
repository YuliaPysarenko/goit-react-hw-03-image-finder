import React, { Component } from "react"
import PropTypes from 'prop-types';
import css from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
       nameForm: '' ,
    }

        
  handleFaund = e => {
    this.setState({ nameForm: e.currentTarget.value.toLowerCase()})
  }

  formSubmit = (e) => {
      e.preventDefault();

     this.setState({
        nameForm: '' 
      })
     
    this.props.onSubmit(this.state.nameForm);
  }

    render() {
  return (
   <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={this.formSubmit}>
     <button type="submit" className={css.SearchFormButton}>
  <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

     <input
      value={this.state.nameForm}
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleFaund}                   
    />
  </form>
</header>) 
   
}        
}

  Searchbar.protoType = {
  onSubmit: PropTypes.func.isRequired,
}
export default Searchbar;