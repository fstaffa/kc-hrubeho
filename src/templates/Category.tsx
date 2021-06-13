import React from "react"
import Header from "../components/header"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Contact from "../components/contact"
import * as styles from "./category.module.css"
import HeroImage from "../components/hero-image"
import { graphql, PageProps } from "gatsby"
import LocationInfo from "../components/location-info"
import KcImage from "../assets/kc-big.svg"

interface Data {
  markdownRemark: {
    id: string
    html: string
    frontmatter: {
      title: string
      short: string
      image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

const Category: React.FC<PageProps<Data>> = ({ data }) => {
  const overlay = (
    <div className={styles.imageOverlayContainer}>
      <KcImage
        style={{ fill: "var(--icon-color)" }}
        className={styles.imageOverlay}
      />
      <div className={styles.title}>
        {data.markdownRemark.frontmatter.title}
      </div>
      <div className={styles.short}>
        {data.markdownRemark.frontmatter.short}
      </div>
    </div>
  )
  return (
    <div className={styles.pageContainer}>
      <Header />
      <HeroImage
        imageData={
          data.markdownRemark.frontmatter.image.childImageSharp.gatsbyImageData
        }
        overlay={overlay}
      />
      <div className={styles.contentContainer}>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
          className={styles.content}
        />
      </div>
      <Contact />
    </div>
  )
}

export default Category

export const puzzlePageQuery = graphql`
  query Category($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        short
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      fields {
        slug
      }
      html
    }
  }
`
