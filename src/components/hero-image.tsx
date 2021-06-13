import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import KcImage from "../assets/kc-big.svg"
import * as styles from "./hero-image.module.css"

interface Props {
  imageData: IGatsbyImageData
}

export default function HeroImage(props: Props) {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageOverlayContainer}>
        <KcImage
          style={{ fill: "var(--icon-color)" }}
          className={styles.imageOverlay}
        />
        <div>Volnočasové a kulturní centrum pro děti i dospělé.</div>
      </div>
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
