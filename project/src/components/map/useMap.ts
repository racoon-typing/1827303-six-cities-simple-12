import { useEffect, useRef, useState, MutableRefObject } from 'react';
import {OfferArr} from './map';
import leaflet from 'leaflet';

function useMap(mapRef: MutableRefObject<null>, offerCityFirst: OfferArr) {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: offerCityFirst.latitude,
          lng: offerCityFirst.longitude,
        },
        zoom: offerCityFirst.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, offerCityFirst]);

  return map;
}

export default useMap;
