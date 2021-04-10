import React from "react"
import { graphql } from "gatsby"
import PostList from "../components/PostList"

const Batizados = ({ data }) => {
  return (
    <div>
      <PostList posts={data.posts.nodes} />
    </div>
  )
}
export default Batizados

export const query = graphql`
  query BatizadosPostQuery {
    posts: allSanityPost(
      filter: { categories: { name: { eq: "Batizados" } } }
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
