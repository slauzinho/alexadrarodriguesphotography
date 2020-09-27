import React from "react"
import { graphql } from "gatsby"
import PostList from "../components/PostList"

const NewlyMom = ({ data }) => {
  return (
    <div className="mt-24 px-16">
      <PostList posts={data.posts.nodes} />
    </div>
  )
}

export default NewlyMom

export const query = graphql`
  query NewlyMamaPostQuery {
    posts: allSanityPost(
      filter: { categories: { name: { eq: "Newly Mom" } } }
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
