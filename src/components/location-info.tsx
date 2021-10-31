import React from "react"
import PlaceIcon from "../assets/place.svg"
import * as styles from "./location-info.module.css"
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api"

interface Props {}

export default function LocationInfo(props: Props) {
  const coordinates = { lat: 50.12875823745096, lng: 14.466307581741237 }
  return (
    <div id="map" className={styles.container}>
      <div>
        <div className={styles.description}>
          <div className={styles.subsection}>
            <PlaceIcon />
          </div>
          <div className={styles.subsection}>
            <div className={styles.text}>
              5 minut pěšky od stanice metra Ládví. Jsme ve vnitrobloku ulic
              Hrubého, Rajmonova, Kurkova a Kyselova. Koukněte na mapu!
            </div>
          </div>
        </div>
      </div>
      <LoadScript googleMapsApiKey="AIzaSyD8redeXVfkntVMfUWWGVvIrt1zjoccLUU">
        <GoogleMap
          zoom={16}
          center={coordinates}
          mapContainerStyle={{ width: "100%", height: "360px" }}
        />
      </LoadScript>
    </div>
  )
}
