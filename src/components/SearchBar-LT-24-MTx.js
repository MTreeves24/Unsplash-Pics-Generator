import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render(){
    return (
    <div className="ui segment gradient-border">
      <form  onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input 
            placeholder="Search the Unsplash library here"
            type="text" 
            value={this.state.term} 
            onChange={(e) => this.setState({ term: e.target.value })}/>
        </div>
      </form>
    </div>
    );
  }
}

export default SearchBar;