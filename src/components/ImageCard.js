import React from 'react';

class ImageCard extends React.Component{
  constructor(props){
    super(props);

    this.state = { spans: 0, link: ""}
    this.imageRef = React.createRef();
  }

componentDidMount(){
  this.imageRef.current.addEventListener('load', this.setSpans);
  this.imageRef.current.addEventListener('click', this.clickThrough);
}


clickThrough = () => {
  const link = this.imageRef.current.src;

  this.setState({ link })
}

loadMoreButtonClick = () => {
  console.log("clicked")
}

setSpans = () => {
  const height = this.imageRef.current.clientHeight;
  const spans = Math.ceil(height / 10);

  this.setState({ spans });
}

  render(){

    const {description,urls} = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <a href={this.state.link} target="_blank" rel="noopener noreferrer">
          <img ref={this.imageRef} alt={description} src={urls.regular}/>
        </a>
      </div>
    )
  }
}

export default ImageCard;