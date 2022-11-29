import React, { Component } from "react";

class SearchBox extends Component {
  state = {};
  render() {
    let { handleSearchChange, input } = this.props;
    return (
      <section className='search'>
        <form>
          <input
            type='text'
            className='btn-input'
            placeholder='Search characters'
            value={input}
            onChange={handleSearchChange}
          />
        </form>
      </section>
    );
  }
}

export default SearchBox;
