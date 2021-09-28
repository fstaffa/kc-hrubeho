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
      category: string
      title: string
      excerpt: string
      image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      times: {
        start: string
        end: string
        day: string
      }[]
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
        {data.markdownRemark.frontmatter.excerpt}
      </div>
    </div>
  )
  return (
    <div>
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
      <LocationInfo />
    </div>
  )
}

export default Category

export const puzzlePageQuery = graphql`
  query Krouzek($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        excerpt
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        times {
          time {
            day
            start
            end
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
