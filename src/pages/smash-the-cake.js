import React from "react"
import { graphql } from "gatsby"
import PostList from "../components/PostList"

const SmashTheCake = ({ data }) => {
  return (
    <div>
      <PostList posts={data.posts.nodes} />
    </div>
  )
}

export default SmashTheCake

export const query = graphql`
  query SmashTheCakeQuery {
    posts: allSanityPost(
      filter: { categories: { name: { eq: "Smash The Cake" } } }
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
