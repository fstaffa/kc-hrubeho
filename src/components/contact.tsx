import React from "react"
import Phone from "../components/phone"
import Email from "../components/email"
import * as styles from "./contact.module.css"

export default function Contact() {
  return (
    <div id="team" className={styles.contacts}>
      <div>
        <h2>Kontakt</h2>
        <div className={styles.contactDetails}>
          <ul>
            <Email emailAddress="kchrubeho@gmail.com" />
          </ul>
        </div>
      </div>
    </div>
  )
}
