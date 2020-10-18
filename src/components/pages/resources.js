import React from 'react'
import '../../App.css'
import MapSection from '../Map'

const location = {
  address: '211 S Cooper St, Arlington, TX',
  lat: 32.734675,
  lng: -97.114280,
} // location of Dr. Lee's office - UTA School of Social Work

function resources() {
  return (
    <div className="Map">
      <MapSection location={location} zoomLevel={15} />
    </div>
  );
}

export default resources;
