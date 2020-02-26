import React from 'react'
import place from './data/place.json'
import PlaceImage from './components/PlaceImage/PlaceImage'
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import './App.scss'


class App extends React.Component {
  state = {
    place: null,
    imageClicked: false
  }
  componentDidMount() {
    this.setState({ place })
  }

  onImageClicked = bool => {
     this.setState({ imageClicked: bool })
  }

  render() {
    const { place, imageClicked } = this.state
    
    if (!place) {
      return <h1>Loading...</h1>
    }

    return (
      <div className="app">
        {imageClicked ? (
          <div
            onMouseLeave={() => this.onImageClicked(false)}
            className="img-view"
          >
            <img
              src={require('./assets/icons/close.png')}
              alt="close"
              className="close"
              onClick={() => this.onImageClicked(false)}
            ></img>
            <img
              className="cover_img"
              src={this.state.place.cover_image}
              alt="cover_image"
            />
          </div>
        ) : (
          <>
            <PlaceImage
              onImageClicked={this.onImageClicked}
              cover_image={place.cover_image}
            />
            <PlaceDetails place={place} />
          </>
        )}
      </div>
    )
  }
}

export default App
