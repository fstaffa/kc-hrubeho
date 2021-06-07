import PhoneIcon from "../assets/phone.svg"
import React from "react"

export default function Phone(props) {
  return (
    <div>
      <PhoneIcon /> <a href={`call:${props.number}`}>{props.number}</a>
    </div>
  )
}
