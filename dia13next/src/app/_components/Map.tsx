"use client";

import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import {GeographyData} from './mapdata'

export const Map = () => {
 /*  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"; */

  return (
    <div className="w-[400px] h-[400px] bg-red-300">
      <ComposableMap>
      <Geographies geography={GeographyData}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={geo.properties.color || 'white'}
                                        className="focus:outline-none"
                                    />
                                ))
                            }
                        </Geographies>
      </ComposableMap>
    </div>
  );
};
