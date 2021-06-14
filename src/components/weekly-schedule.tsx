import React from "react"
import * as styles from "./weekly-schedule.module.css"
import { Link } from "gatsby"

interface Props {
  items: {
    slug: string
    title: string
    times: {
      time: {
        day:
          | "monday"
          | "tuesday"
          | "wednesday"
          | "thursday"
          | "friday"
          | "saturday"
          | "sunday"
        start: string
        end: string
      }
    }[]
  }[]
}

const LinkView: React.FC<Props> = (props: Props) => {
  console.log(props)
  const itemsWithTime = props.items.flatMap(x => {
    return x.times.map(time => ({
      slug: x.slug,
      title: x.title,
      ...time,
    }))
  })
  const days = [
    { id: "monday", name: "po" },
    { id: "tuesday", name: "út" },
    { id: "wednesday", name: "st" },
    { id: "thursday", name: "čt" },
    { id: "friday", name: "pá" },
    { id: "saturday", name: "so" },
    { id: "sunday", name: "ne" },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        {days.map(x => {
          return (
            <div className={styles.day} key={x.id}>
              <div className={styles.dayName}>{x.name}</div>
              <div className={styles.eventContainer}>
                {itemsWithTime
                  .filter(item => item.time.day === x.id)
                  .map(item => {
                    return (
                      <div>
                        <Link to={item.slug}>
                          <div>{item.time.start}</div>
                          <div>{item.title}</div>
                        </Link>
                      </div>
                    )
                  })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LinkView
