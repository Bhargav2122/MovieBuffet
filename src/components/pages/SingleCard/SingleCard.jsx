import React from 'react'
import { img_small } from '../SingleCard/config.js'
const SingleCard = ({
    id,
    picture,
    title,
    date,
    mediatype,
    vote,
    overview
}) => {
  return (
    <>
      <div className="card-pic">
        <img src={`${img_small}/${picture}`} alt="movie pic" />
        <div className="card-summary">
          <h2>{title}</h2>
          <h4>Summary</h4>
          <p>{overview}</p>
        </div>
        <div className="card-rate">
          <p>Rating: {vote}⭐</p>
          <span>Date: {date}</span>
        </div>
      </div>
    </>
  )
}

export default SingleCard