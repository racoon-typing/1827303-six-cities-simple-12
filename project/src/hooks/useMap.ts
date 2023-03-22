import { useEffect, useRef, useState, MutableRefObject } from 'react';
import leaflet from 'leaflet';
import { Map } from 'leaflet';
import { City } from '../types/map';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, offerCityFirst: City): Map | null {
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
