import React from "react"

const Reviews = ({ reviews = [] }) => {
  return (
    <div className="flex px-12 mt-24 flex-wrap sm:justify-center items-center">
      {reviews.map(review => (
        <div className="px-4 py-4" key={review.name}>
          <h3>{review.name}</h3>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  )
}

export default Reviews
