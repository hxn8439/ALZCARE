import React from 'react'
import '../../App.css'
import MapSection from '../Map'
import ResourceTableSection from '../ResourceTableSection'

//importing all dependiencies, libraries, and subsite js pages by category- Hamilton Nguyen 10/19/2020

// This constant location serves as a global position values meta data to be placed on the map. - Hamilton Nguyen 10/19/2020
const location = {
  address: '211 S Cooper St, Arlington, TX',
  lat: 32.734675,
  lng: -97.114280,
} // location of Dr. Lee's office - UTA School of Social Work- Robert F. 10/19/2020

function resources() {
  return (
    //Alternate map - Johnny P. 11/13/2020
    <div>
    <iframe src="https://www.google.com/maps/d/embed?mid=1benrcNvPLgrYBM4BvHkpL0NzbDumoS5k&hl=en" width="800" height="600"></iframe>
    <ResourceTableSection />
    </div>);
  }

  // Original map
  //   <div className="Map">
  //     <MapSection location={location} zoomLevel={15} />
  //     <ResourceTableSection />
  //   </div>
  // );
  // displays a map on the Community Resources page - Robert F. 10/19/2020

export default resources;
