import React from "react"
import Carousel from "../components/Carousel"

export default function Home({ data }) {
  console.log("data =======>", data)
  return (
    <div>
      <Carousel images={data.carousel.nodes[0].image} />

      <ul className="mt-16 max-w-2xl m-auto text-lg px-4">
        <li className="flex justify-between">
          <div>Telefone</div>
          <div>91919191</div>
        </li>
        <li className="flex justify-between">
          <div>Facebook</div>
          <a
            href="https://www.facebook.com/alexandrarodriguesphotography"
            target="_blank"
            rel="noreferrer"
          >
            facebook/alexandrarodriguesphotography
          </a>
        </li>
        <li className="flex justify-between">
          <div>Instagram</div>
          <a
            href="https://www.instagram.com/alexandrarodriguesphotography"
            target="_blank"
            rel="noreferrer"
          >
            instagram/alexandrarodriguesphotography
          </a>
        </li>
      </ul>
    </div>
  )
}

export const query = graphql`
  query GetCarouselImagesQuery {
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
  }
`
