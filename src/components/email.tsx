import EmailIcon from "../assets/email.svg"
import React from "react"

interface Props {
  emailAddress: string
}

export default function Email(props: Props) {
  return (
    <div>
      <EmailIcon style={{ marginTop: "1em" }} />{" "}
      <a
        href={`mailto:${props.emailAddress}`}
        style={{ marginBottom: "-0.5em" }}
      >
        {props.emailAddress}
      </a>
    </div>
  )
}
