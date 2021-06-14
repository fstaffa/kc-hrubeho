import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import * as styles from "./link-view.module.css"
import { Link } from "gatsby"

interface Props {
  items: {
    image: IGatsbyImageData
    slug: string
    title: string
  }[]
}

const LinkView: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.categoryList}>
      {props.items.map(x => {
        return (
          <div className={styles.categoryItem} key={x.slug}>
            <Link to={x.slug}>
              <GatsbyImage image={x.image} alt="" className={styles.image} />
              <div className={styles.categoryTitle}>{x.title}</div>
              <div>Přečíst více</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default LinkView
