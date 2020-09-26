import React from "react"
import { graphql } from "gatsby"
import PostList from "../components/PostList"

const Lifestyle = ({ data }) => {
  return (
    <div>
      <PostList posts={data.posts.nodes} />
    </div>
  )
}
export default Lifestyle

export const query = graphql`
  query LifestylePostQuery {
    posts: allSanityPost(
      filter: { categories: { name: { eq: "Lifestyle" } } }
    ) {
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
