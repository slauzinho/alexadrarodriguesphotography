import React from "react"
import FacebookLogo from "../../static/facebook.svg"
import InstagramLogo from "../../static/instagram.svg"
import Telephone from "../../static/telephone.svg"
import NewsLetter from "./Newsletter"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center pb-10 mx-auto mt-16 md:flex-row">
      <ul className="flex flex-col items-center px-4 md:font-title md:text-xl md:mr-12">
        <li className="flex items-center justify-between">
          <img src={FacebookLogo} className="w-6 mr-4" alt="facebook logo" />
          <a
            href="https://www.facebook.com/alexandrarodriguesphotography"
            target="_blank"
            rel="noreferrer"
          >
            alexandrarodriguesphotography
          </a>
        </li>
        <li className="flex justify-between mt-2">
          <img src={InstagramLogo} className="w-6 mr-4" alt="instagram logo" />
          <a
            href="https://www.instagram.com/alexandrarodriguesphotography"
            target="_blank"
            rel="noreferrer"
          >
            alexandrarodriguesphotography
          </a>
        </li>
        <li className="flex justify-between m-2">
          <img src={Telephone} className="w-6 mr-4" alt="phone number" />
          <a href="tel:916232304">916232304</a>
        </li>
        <li className="flex justify-between m-2 text-sm">
          <Link to="/privacy">Politica de Privacidade</Link>
        </li>
      </ul>
      <NewsLetter />
    </div>
  )
}
