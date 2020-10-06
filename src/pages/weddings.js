import React from "react"
import { graphql } from "gatsby"
import PostList from "../components/PostList"

const Weddings = ({ data }) => {
  return (
    <div>
      <PostList posts={data.posts.nodes} />
    </div>
  )
}
export default Weddings

export const query = graphql`
  query WeddingPostQuery {
    posts: allSanityPost(filter: { categories: { name: { eq: "Weddings" } } }) {
      nodes {
        categories {
          name
        }
        slug {
          current
        }
        titulo
        id
        date
        poster {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
