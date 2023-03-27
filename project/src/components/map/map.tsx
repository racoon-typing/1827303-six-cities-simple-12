import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { ConstructorRoom } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../consts/consts';
import './style.css';


type MapProps = {
  offers: ConstructorRoom[];
  activeCity: string;
  selectedPoint: number;
};


function Map({ offers, activeCity, selectedPoint}: MapProps) {
  const selectedPointId = selectedPoint - 1;

  // Фильтрует исходный массив для отрисовки карты
  const newOffers = offers.filter((offer) => offer.city.name === activeCity);

  // Определяет город в виде массива
  const offerCity = newOffers.map((offer) => {
    const obj = {
      name: offer.city.name,
      latitude: offer.city.location.latitude,
      longitude: offer.city.location.longitude,
      zoom: offer.city.location.zoom,
    };

    return obj;
  });

  // Создает массив пинов для опредленного города
  const offerPins = newOffers.map((offer, index) => {
    const obj = {
      id: index,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    };

    return obj;
  });

  // Берет первый объект из массива
  const offerCityFirst = offerCity[0];

  // Пины на карте
  const mapRef = useRef(null);
  const map = useMap(mapRef, offerCityFirst);


  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offerPins.forEach((point, id) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: (id === selectedPointId)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offerPins, currentCustomIcon, defaultCustomIcon, selectedPointId]);

  return (
    <div
      style={{width: '100%', height: 'inherit'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;

