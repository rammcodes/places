import React, { Component } from 'react'
import './PlaceImage.scss'

class PlaceImage extends Component {
  render() {
    const { cover_image, onImageHovered } = this.props
    return (
      <div onMouseOver={() => onImageHovered(true)} className="place_image">
        <img alt="place_image" src={cover_image} />
      </div>
    )
  }
}

export default PlaceImage
