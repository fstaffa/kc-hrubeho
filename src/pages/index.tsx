import React from "react"
import Header from "../components/header"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Contact from "../components/contact"
import * as styles from "./index.module.css"
import HeroImage from "../components/hero-image"
import { graphql, PageProps } from "gatsby"
import LocationInfo from "../components/location-info"
import KcImage from "../assets/kc-big.svg"

interface Data {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const Home: React.FC<PageProps<Data>> = ({ data }) => {
  const overlay = (
    <div className={styles.imageOverlayContainer}>
      <KcImage
        style={{ fill: "var(--icon-color)" }}
        className={styles.imageOverlay}
      />
      <div className={styles.title}>
        Volnočasové a kulturní centrum pro děti i dospělé.
      </div>
    </div>
  )
  return (
    <div className={styles.pageContainer}>
      <Header />
      <HeroImage
        imageData={data.file.childImageSharp.gatsbyImageData}
        overlay={overlay}
      />
      <Contact />
      <LocationInfo />
    </div>
  )
}

export default Home

export const query = graphql`
  query {
    file(name: { eq: "sketch" }, extension: { eq: "jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
