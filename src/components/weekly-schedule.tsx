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
  const itemsWithTime = props.items
    .flatMap(x => {
      return x.times.map(time => ({
        slug: x.slug,
        title: x.title,
        ...time,
      }))
    })
    .sort((a, b) => a.time.start.localeCompare(b.time.start))
  const days = [
    { id: "monday", name: "po" },
    { id: "tuesday", name: "út" },
    { id: "wednesday", name: "st" },
    { id: "thursday", name: "čt" },
    { id: "friday", name: "pá" },
    { id: "saturday", name: "so" },
    { id: "sunday", name: "ne" },
  ]

  if (itemsWithTime.length === 0) {
    return <div />
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>
          {days.map(x => {
            return (
              <div className={styles.day} key={x.id}>
                <div className={styles.dayName}>{x.name.toUpperCase()}</div>
                <div className={styles.eventContainer}>
                  {itemsWithTime
                    .filter(item => item.time.day === x.id)
                    .map(item => {
                      return (
                        <div className={styles.event}>
                          <div className={styles.timeRange}>
                            {item.time.start} - {item.time.end}
                          </div>
                          <Link to={item.slug} className={styles.eventTitle}>
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
    </div>
  )
}

export default LinkView
