import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

const MapChart = () => {
  return (
    <ComposableMap projection='geoMercator' projectionConfig={{scale: 100}}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .filter(d => d.properties.REGION_UN !== 'Antarctica')
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
