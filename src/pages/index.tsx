import React from "react"
import Header from "../components/header"
import { IGatsbyImageData, getImage, ImageDataLike } from "gatsby-plugin-image"
import Contact from "../components/contact"
import * as styles from "./index.module.css"
import HeroImage from "../components/hero-image"
import { graphql, PageProps, Link } from "gatsby"
import LocationInfo from "../components/location-info"
import KcImage from "../assets/kc-big.svg"
import Collapsible from "react-collapsible"
import LinkView from "../components/link-view"
import WeeklySchedule from "../components/weekly-schedule"

interface Data {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  categories: {
    nodes: {
      frontmatter: {
        title: string
        image: ImageDataLike
      }
      fields: {
        slug: string
      }
    }[]
  }
  about: {
    childMarkdownRemark: {
      html: string
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

const Home: React.FC<PageProps<Data>> = ({ data }) => {
  const overlay = (
    <div className={styles.imageOverlayContainer}>
      <KcImage
        style={{ fill: "var(--icon-color)" }}
        className={styles.imageOverlay}
      />
      <div>Volnočasové a kulturní centrum pro děti i dospělé.</div>
    </div>
  )
  const aboutUsTrigger = (
    <div className={styles.aboutTrigger}>
      <div>O nás</div>
      <div>+</div>
    </div>
  )

  const categoryItems = data.categories.nodes.map(x => ({
    title: x.frontmatter.title,
    image: getImage(x.frontmatter.image),
    slug: x.fields.slug,
  }))
  return (
    <div className={styles.pageContainer}>
      <Header />
      <HeroImage
        imageData={data.file.childImageSharp.gatsbyImageData}
        overlay={overlay}
      />
      <div className={styles.aboutContainer}>
        <div className={styles.big}>Jen pár minut chůze od metra Ládví.</div>

        <Collapsible trigger={aboutUsTrigger}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.about.childMarkdownRemark.html,
            }}
            className={styles.content}
          />
        </Collapsible>

        <div className={styles.categoryContainer}>
          <div className={styles.big}>Co děláme</div>
          <LinkView items={categoryItems} />
        </div>
      </div>

      <div className={styles.weeklyScheduleContainer}>
        <WeeklySchedule
          items={data.krouzky.nodes.map(x => ({
            slug: x.fields.slug,
            title: x.frontmatter.title,
            times: x.frontmatter.times ?? [],
          }))}
        />
      </div>
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
    categories: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "category" } } }
    ) {
      nodes {
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 120, height: 120)
            }
          }
        }
        fields {
          slug
        }
      }
    }
    about: file(name: { eq: "about" }) {
      childMarkdownRemark {
        html
      }
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
              gatsbyImageData(layout: FIXED, width: 120)
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
