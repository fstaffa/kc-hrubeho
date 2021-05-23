import React from "react"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import KcImage from "../assets/kc-big.svg"
import * as styles from "./index.module.css"

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.imageContainer}>
        <div className={styles.imageOverlayContainer}>
          <KcImage
            style={{ fill: "var(--icon-color)" }}
            className={styles.imageOverlay}
          />
          <div>Volnočasové a kulturní centrum pro děti i dospělé.</div>
        </div>
        <div className={styles.backgroundImageContainer}>
          <StaticImage
            src="./sketch.jpg"
            alt=""
            layout="fullWidth"
            className={styles.backgroundImage}
          />
        </div>
      </div>
      <div>Kontakty</div>
      <div>Mapa</div>
    </div>
  )
}
