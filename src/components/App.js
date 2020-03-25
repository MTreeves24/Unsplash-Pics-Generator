import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './ImageList.css';

let clickCount = 3;

class App extends React.Component {
  state = { images: [] }

 onSearchSubmit = async (term) => {
  const searchTerm = document.querySelector(".searchBarQuery").value;
  const response = await unsplash.get('/search/photos?per_page=20', {
    params: { query: term },
  })
    this.setState({ images: response.data.results })
    if (searchTerm === ''){
      document.querySelector(".button").innerHTML="Search"
    } else {
      document.querySelector(".button").innerHTML="See more?"
    }
}


onButtonClick = async () => { 
  const searchTerm = document.querySelector(".searchBarQuery").value;
  const response = await unsplash.get(`/search/photos?page=${clickCount}?per_page=20`, {
    params: { query: searchTerm },
  })
    this.setState({ images: response.data.results })
    if (searchTerm === ''){
      document.querySelector(".button").innerHTML="Search"
    } else {
      document.querySelector(".button").innerHTML="See more?"
      clickCount += 1;
    }
}

  render() {
    return (
      <div className="ui container gradient-border" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
        <button className="fluid ui button inverted"
          onClick={this.onButtonClick}>Search
          </button>
      </div>
      );
    }
  }

export default App;