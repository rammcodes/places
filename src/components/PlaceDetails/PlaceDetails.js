import React, { Component } from 'react'
import './PlaceDetails.scss'
import FeatureRating from '../FeatureRating/FeatureRating'
import Rating from '../Rating/Rating'
import Tags from '../Tags/Tags'

class PlaceDetails extends Component {
  render() {
    const {
      name,
      area,
      city,
      category,
      review_rating,
      feature_rating
    } = this.props.place
    return (
      <div className="place_details">
        <div className="name-and-locn">
          <h1 className="name">{name}</h1>
          <div className="locn">
            <img
              src="https://img.icons8.com/material/24/000000/worldwide-location--v1.png"
              alt="location-pointer"
            />
            <span className="street-address">{area},</span>
            <span className="city">{city}</span>
          </div>
        </div>
        <Tags  category={category}/>
        <Rating review_rating={review_rating} />
        <FeatureRating feature_rating={feature_rating} />
      </div>
    )
  }
}

export default PlaceDetails
