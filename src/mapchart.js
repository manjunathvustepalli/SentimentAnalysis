import React, { Component } from 'react'
import {
    ComposableMap,
    Geographies,
    Geography,
  } from "react-simple-maps"
  
  // url to a valid topojson file
  const geoUrl =
    "https://raw.githubusercontent.com/samateja/D3topoJson/master/bangladesh.json"
  
export default class mapchart extends Component {
    render() {
        return (
            <div>
                 <div>
      <ComposableMap  projectionConfig={{
        // rotate: [58, 20, 0],
        scale: 600
      }}>
        <Geographies geography={geoUrl}>
          {({geographies}) => geographies.map(geo =>
            <Geography key={geo.rsmKey} geography={geo} />
          )}
        </Geographies>
      </ComposableMap>
    </div>
            </div>
        )
    }
}
