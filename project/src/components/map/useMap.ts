import { useEffect, useRef, useState, MutableRefObject } from 'react';
import {Apartment, OfferArr} from './map';
import leaflet from 'leaflet';


function useMap(mapRef: MutableRefObject<null>, offer: OfferArr) {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef(false);

  const {latitude, longitude, zoom} = offer;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
      });


    }
  });

  return map;
}

export default useMap;
