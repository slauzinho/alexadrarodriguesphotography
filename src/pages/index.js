import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Carousel from "../components/Carousel"
import SEO from "../components/SEO"
import FacebookLogo from "../../static/facebook.svg"
import InstagramLogo from "../../static/instagram.svg"
import Telephone from "../../static/telephone.svg"

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

        <ul className="mt-16 m-auto text-lg px-4 flex items-center flex-col md:font-title md:text-3xl">
          <li className="flex justify-between items-center">
            <img src={FacebookLogo} className="w-6 mr-4" alt="facebook logo" />
            <a
              href="https://www.facebook.com/alexandrarodriguesphotography"
              target="_blank"
              rel="noreferrer"
            >
              facebook/alexandrarodriguesphotography
            </a>
          </li>
          <li className="flex justify-between mt-2">
            <img
              src={InstagramLogo}
              className="w-6 mr-4"
              alt="instagram logo"
            />
            <a
              href="https://www.instagram.com/alexandrarodriguesphotography"
              target="_blank"
              rel="noreferrer"
            >
              instagram/alexandrarodriguesphotography
            </a>
          </li>
          <li className="flex justify-between m-2">
            <img src={Telephone} className="w-6 mr-4" alt="phone number" />
            <div>916232304</div>
          </li>
        </ul>
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
    review: allSanityReviews {
      nodes {
        name
        review
      }
    }
  }
`
