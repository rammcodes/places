import React from 'react'

const Tags = ({ category }) => {
  return (
    <div className="tags">
      <div className="tags-upper-part">
        <h3 className="title">Tags</h3>
        <img
          width="20px"
          alt="tags"
          src="https://img.icons8.com/material-outlined/24/000000/tags.png"
        />
      </div>
      <div className="tags-container">
        {category.map((cat,i) => (
          <span key={i} className="tag">
            <img
              width="15px"
              alt="single-tag"
              src={require('../../assets/icons/tag.png')}
            />
            <span className="tag-name">{cat}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Tags
