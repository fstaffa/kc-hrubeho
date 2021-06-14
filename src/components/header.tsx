import React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"
import Facebook from "../assets/facebook-icon.svg"
import Instagram from "../assets/instagram-icon.svg"

export default function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link to="/" className={styles.home}>
            Úvod
          </Link>
        </li>
        <li>
          <Link to="/akce">Akce</Link>
        </li>
        <li>
          <Link to="#team">Kontakt</Link>
        </li>
        <li>
          <Link to="#map">Kudy k nám</Link>
        </li>
        <li>
          <a href="https://www.facebook.com/KomunitniCentrumHrubeho/">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/komunitni.centrum.hrubeho">
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  )
}
