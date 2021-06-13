import React from "react"
import Phone from "../components/phone"
import Email from "../components/email"
import * as styles from "./contact.module.css"

export default function Contact() {
  return (
    <div className={styles.contacts}>
      <div>
        <h2>Kristýna Janyšková</h2>
        <p style={{ maxWidth: "25em" }}>
          Hlavní šéfka komunitního centra. Odpoví vám na všechno, co vás zajímá!
        </p>
        <div className={styles.contactDetails}>
          <ul>
            <Phone number="+420723569587" />
            <Email emailAddress="kchrubeho@gmail.com" />
          </ul>
        </div>
      </div>
    </div>
  )
}
