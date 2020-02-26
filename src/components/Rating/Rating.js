import React from 'react'

const Rating = ({ review_rating }) => {
  return (
    <div className="ratings">
      <h3>
        Ratings <span>( {review_rating.total} ratings )</span>
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
                      src={require('../../assets/icons/star-empty.png')}
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
  )
}

export default Rating
