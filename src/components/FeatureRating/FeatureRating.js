import React from 'react'

const FeatureRating = ({ feature_rating }) => {
  return (
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
              <span className="rating">{feature_rating.place}</span>
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
              <span className="rating">{feature_rating.food}</span>
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
              <span className="rating">{feature_rating.service}</span>
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
              <span className="rating">{feature_rating.staff}</span>
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
              <span className="rating">{feature_rating.breakfast}</span>
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
  )
}

export default FeatureRating
