import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"
import SEO from "../components/SEO"

const SinglePostPage = ({ data: { post } }) => {
  const images = post.album.reduce((acc, { asset: { thumb, full } }) => {
    return [...acc, { thumb, full }]
  }, [])
  return (
    <>
      <SEO title={post.titulo} />
      <div>
        <div className="px-8 text-center">
          <h1 className="text-5xl">{post.titulo}</h1>
          <div className="max-w-sm m-auto text-lg mb-8">
            <ReactMarkdown source={post.body} />
          </div>
        </div>
        <div className="max-w-screen-xl m-auto">
          <Gallery images={images} />
        </div>
      </div>
    </>
  )
}

export default SinglePostPage

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      body
      titulo
      album {
        asset {
          id
          thumb: fluid(maxWidth: 270, maxHeight: 270) {
            ...GatsbySanityImageFluid
          }
          full: fluid(maxWidth: 1024) {
            ...GatsbySanityImageFluid
          }
        }
      }
      poster {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
