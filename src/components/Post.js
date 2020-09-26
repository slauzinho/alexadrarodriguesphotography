import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Post = ({ post }) => {
  return (
    <Link to={`${post.slug.current}`}>
      <div className="flex flex-col items-start justify-center mt-4">
        <h2 className="text-xl text-center font-bold self-center font-sans">
          {post.titulo}
        </h2>
        <div className="flex items-end justify-end self-center">
          <div className="rounded-full h-12 w-12 bg-red-300 bg-opacity-75 flex items-center justify-center absolute z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <Img
            fluid={post.poster.asset.fluid}
            alt={post.titulo}
            className="w-64 object-cover self-center rounded-lg shadow-lg hover:shadow-md"
          />
        </div>
      </div>
    </Link>
  )
}

export default Post
