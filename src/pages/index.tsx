import React from "react"
import Header from "../components/header"
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image"
import Contact from "../components/contact"
import * as styles from "./index.module.css"
import HeroImage from "../components/hero-image"
import { graphql, PageProps, Link } from "gatsby"
import LocationInfo from "../components/location-info"
import KcImage from "../assets/kc-big.svg"
import Collapsible from "react-collapsible"

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
        image: {
          childImageSharp: {
            fixed: any
          }
        }
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
          <div className={styles.categoryList}>
            {data.categories.nodes.map(x => {
              return (
                <Link to={x.fields.slug}>
                  <div className={styles.categoryItem} key={x.fields.slug}>
                    <div className={styles.categoryTitle}>
                      {x.frontmatter.title}
                    </div>
                    <div></div>
                  </div>{" "}
                  Přečíst více
                </Link>
              )
            })}
          </div>
        </div>
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
              fixed(width: 80) {
                ...GatsbyImageSharpFixed
              }
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
  }
`
