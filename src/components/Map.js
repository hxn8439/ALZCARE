import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './Map.css'
//importing all dependiencies, libraries, and subsite js pages by category- Hamilton Nguyen 10/19/2020

// creating a constant locationPin and class contents- Hamilton Nguyen 10/19/2020
const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

// creating a constant map and class contents- Hamilton Nguyen 10/19/2020
//***TA AND PROFESSOR, DO NOT REVEAL THE CREDITIONALS BELOW TO ANYONE DUE TO SECURITY AND PRIVACY REASONS FOR THIS PROJECT. - Hamilton Nguyen 10/19/2020 ***
const MapSection = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map=h2">Find Community Resources Near You</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCIf5H4gG4s0Btj9owk3Lj4TBkWWbhTzc4' }}  // this is Robbie's private API key ... move this to the backend
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default MapSection
