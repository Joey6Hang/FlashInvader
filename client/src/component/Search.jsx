import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        seatchString: ''
    };

    handleSearch = (text) => {
        this.setState({searchString: text})
    }

  render() {
    return (
        <div class="nes-field is-inline" id="search">
        <input type="text" id="dark_field" class="nes-input is-dark" 
        placeholder="Search..." 
        onChange={(e) => this.handleSearch(e.target.value)}/>
      </div>
    )
  }
}
