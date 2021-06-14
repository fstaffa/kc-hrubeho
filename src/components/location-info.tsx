import React from "react"
import PlaceIcon from "../assets/place.svg"
import * as styles from "./location-info.module.css"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"

interface Props {}

export default function LocationInfo(props: Props) {
  const WrappedMap = withScriptjs(
    withGoogleMap(() => {
      const coordinates = { lat: 50.12875823745096, lng: 14.466307581741237 }
      return (
        <div>
          {typeof window !== "undefined" && (
            <GoogleMap defaultZoom={16} defaultCenter={coordinates}>
              <Marker position={coordinates} />
            </GoogleMap>
          )}
        </div>
      )
    })
  )
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
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8redeXVfkntVMfUWWGVvIrt1zjoccLUU&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `360px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}
