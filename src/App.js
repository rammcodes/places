import React from 'react'
import place from './data/place.json'
import PlaceImage from './components/PlaceImage/PlaceImage'
import PlaceDetails from './components/PlaceImage/PlaceDetails/PlaceDetails'
import './App.scss'

class App extends React.Component {
  state = {
    place: null,
    imageHovered: false
  }

  componentDidMount() {
    this.setState({ place })
    console.log(place)
  }

  onImageHovered = bool => {
     this.setState({ imageHovered: bool })
  }

  render() {
    const { place, imageHovered } = this.state
    if (!place) {
      return <h1>Loading...</h1>
    }

    return (
      <div className="app">
        {imageHovered ? (
          <div
            onMouseLeave={() => this.onImageHovered(false)}
            className="img-view"
          >
            <img
              src={require('./assets/icons/close.png')}
              alt="close"
              className="close"
              onMouseEnter={() => this.onImageHovered(false)}
              onClick={() => this.onImageHovered(false)}
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
              onImageHovered={this.onImageHovered}
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
