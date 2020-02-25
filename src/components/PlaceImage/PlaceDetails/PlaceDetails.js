import React, { Component } from 'react'
import './PlaceDetails.scss'

class PlaceDetails extends Component {
  state = {}
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
        <div className="ratings">
          <h3>
            Ratings <span>( {review_rating.total} ratings )</span>{' '}
          </h3>
          <div className="content">
            {review_rating.votes.map(vote => (
              <div key={vote.rating} className="starcount-and-val">
                <div className="starcount">
                  {[...Array(5)].map((e, i) => {
                    if (i + 1 <= vote.rating) {
                      return (
                        <img
                          key={i}
                          alt="star"
                          src="https://img.icons8.com/color/48/000000/filled-star.png"
                        />
                      )
                    } else {
                      return (
                        <img
                          key={i}
                          alt="star"
                          src={require('../../../assets/icons/star-empty.png')}
                        />
                      )
                    }
                  })}
                </div>
                <span>{vote.votes}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="feature_rating">
          <div className="content">
            <h3>Feature Rating</h3>
            <div className="features-colln">
              <div className="indi-feature">
                <div className="left-secn">
                  <img
                    className="feature-icon"
                    alt="feature-icon"
                    src="https://img.icons8.com/pastel-glyph/64/000000/place-marker.png"
                  />
                  <span className="feature-name">Place</span>
                </div>
                <div className="right-secn">
                  <span className="rating">4.6</span>
                  <img
                    src="https://img.icons8.com/color/48/000000/filled-star.png"
                    alt="star"
                    className="star"
                  />
                </div>
              </div>
              <div className="indi-feature">
                <div className="left-secn">
                  <img
                    className="feature-icon"
                    alt="feature-icon"
                    src="https://img.icons8.com/ios/50/000000/halal-food.png"
                  />
                  <span className="feature-name">Food</span>
                </div>
                <div className="right-secn">
                  <span className="rating">4.6</span>
                  <img
                    src="https://img.icons8.com/color/48/000000/filled-star.png"
                    alt="star"
                    className="star"
                  />
                </div>
              </div>

              <div className="indi-feature">
                <div className="left-secn">
                  <img
                    className="feature-icon"
                    alt="feature-icon"
                    src="https://img.icons8.com/ios/50/000000/restaurant-pickup.png"
                  />
                  <span className="feature-name">Service</span>
                </div>
                <div className="right-secn">
                  <span className="rating">4.6</span>
                  <img
                    src="https://img.icons8.com/color/48/000000/filled-star.png"
                    alt="star"
                    className="star"
                  />
                </div>
              </div>

              <div className="indi-feature">
                <div className="left-secn">
                  <img
                    className="feature-icon"
                    alt="feature-icon"
                    src="https://img.icons8.com/ios/32/000000/conference-background-selected.png"
                  />
                  <span className="feature-name">Staff</span>
                </div>
                <div className="right-secn">
                  <span className="rating">4.6</span>
                  <img
                    src="https://img.icons8.com/color/48/000000/filled-star.png"
                    alt="star"
                    className="star"
                  />
                </div>
              </div>

              <div className="indi-feature">
                <div className="left-secn">
                  <img
                    className="feature-icon"
                    alt="feature-icon"
                    src="https://img.icons8.com/ios/24/000000/buffet-breakfast--v2.png"
                  />
                  <span className="feature-name">Breakfast</span>
                </div>
                <div className="right-secn">
                  <span className="rating">4.6</span>
                  <img
                    src="https://img.icons8.com/color/48/000000/filled-star.png"
                    alt="star"
                    className="star"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaceDetails
