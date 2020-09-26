import React from "react"
import Slider from "react-slick"
import Image from "gatsby-image"

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
    <div>
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
    </div>
  )
}
export default Carousel
