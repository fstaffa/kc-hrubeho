import React from "react"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import KcImage from "../assets/kc-big.svg"
import Phone from "../components/phone"
import Email from "../components/email"
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
      <div className={styles.contacts}>
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <h2>Kristýna Janyšková</h2>
          <p style={{ maxWidth: "25em" }}>
            Hlavní šéfka komunitního centra. Odpoví vám na všechno, co vás
            zajímá!
          </p>
          <div className={styles.contactDetails}>
            <ul>
              <Phone number="+420723569587" />
              <Email emailAddress="kchrubeho@gmail.com" />
            </ul>
          </div>
        </div>
      </div>
      <div>pasdsdfj aslkdas;dlfkjad;fasdf asdfasdf</div>
    </div>
  )
}
