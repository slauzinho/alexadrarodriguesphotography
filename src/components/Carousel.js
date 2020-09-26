import React from "react"
import Slider from "react-slick"
import Image from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <Slider {...settings}>
      {images.map(img => (
        <div key={img.id}>
          <Image
            fluid={img.asset.fluid}
            style={{ height: "60vh", objectFit: "cover" }}
          />
        </div>
      ))}
    </Slider>
  )
}
export default Carousel
