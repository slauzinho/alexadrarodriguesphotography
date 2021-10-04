import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Carousel from "../components/Carousel"
import SEO from "../components/SEO"

import Reviews from "../components/Reviews"

export default function Home({ data }) {
  const [isRendered, setIsRendered] = useState(false)
  useEffect(() => {
    setIsRendered(true)
  }, [])

  return (
    <>
      <SEO />
      <div>
        {isRendered ? <Carousel images={data.carousel.nodes[0].image} /> : null}
        <div>
          <div>
            <Reviews reviews={data.reviews.nodes} />
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query getReviewsQueryAndGetCarouselImagesQuery {
    carousel: allSanityCarousel {
      nodes {
        image {
          asset {
            id
            fluid(maxWidth: 2000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    reviews: allSanityReviews {
      nodes {
        name
        review
      }
    }
  }
`
