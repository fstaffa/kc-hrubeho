import React from "react"
import Header from "../components/header"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Contact from "../components/contact"
import * as styles from "./category.module.css"
import HeroImage from "../components/hero-image"
import { graphql, PageProps } from "gatsby"
import LocationInfo from "../components/location-info"
import WeeklySchedule from "../components/weekly-schedule"
import KcImage from "../assets/kc-big.svg"

interface Data {
  markdownRemark: {
    id: string
    html: string
    frontmatter: {
      id: string
      title: string
      short: string
      image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
  krouzky: {
    nodes: {
      frontmatter: {
        title: string
        times?: {
          time: {
            day:
              | "monday"
              | "tuesday"
              | "wednesday"
              | "thursday"
              | "friday"
              | "saturday"
              | "sunday"
            start: string
            end: string
          }
        }[]
        category: string
        excerpt: string
        short: string
      }
      fields: {
        slug: string
      }
    }[]
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
      <WeeklySchedule
        items={data.krouzky.nodes
          .filter(
            x => x.frontmatter.category === data.markdownRemark.frontmatter.id
          )
          .map(x => ({
            slug: x.fields.slug,
            title: x.frontmatter.title,
            times: x.frontmatter.times ?? [],
          }))}
      />

      <Contact />
      <LocationInfo />
    </div>
  )
}

export default Category

export const puzzlePageQuery = graphql`
  query Category($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        id
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
    krouzky: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "krouzky" } } }
    ) {
      nodes {
        frontmatter {
          title
          times {
            time {
              day
              start
              end
            }
          }
          category
          excerpt
          short
          image {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 80)
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
