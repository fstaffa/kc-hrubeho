import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import * as styles from "./hero-image.module.css"

interface Props {
  imageData: IGatsbyImageData
  overlay: React.ReactNode
}

export default function HeroImage(props: Props) {
  return (
    <div className={styles.imageContainer}>
      {props.overlay}
      <div className={styles.backgroundImageContainer}>
        <GatsbyImage
          image={props.imageData}
          alt=""
          className={styles.backgroundImage}
        />
      </div>
    </div>
  )
}
