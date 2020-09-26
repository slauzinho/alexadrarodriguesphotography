import React from "react"
import PostList from "../components/PostList"

const NewbornAndBabies = ({ data }) => {
  return (
    <div>
      <PostList posts={data.posts.nodes} />
    </div>
  )
}

export default NewbornAndBabies

export const query = graphql`
  query NewbornBabiesQuery {
    posts: allSanityPost(
      filter: { categories: { name: { eq: "Newborn & Babies" } } }
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
