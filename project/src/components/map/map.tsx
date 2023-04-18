import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { ConstructorRoom } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../consts/consts';
import './style.css';
import { getOfferId } from '../../store/main-process/selectors';

// Redux
import {
  useAppSelector,
} from '../../hooks';

type MapProps = {
  offers: ConstructorRoom[];
  currentOffer?: ConstructorRoom;
};

function Map({ offers, currentOffer }: MapProps) {
  // Получает id города на который навели
  let hoveredCity = useAppSelector(getOfferId);

  // Определяет город в виде объекта
  const offerCity = offers.map((offer) => {
    const obj = {
      name: offer.city.name,
      latitude: offer.city.location.latitude,
      longitude: offer.city.location.longitude,
      zoom: offer.city.location.zoom,
    };

    return obj;
  });

  // Создает массив пинов для опредленного города
  let offerPins = offers.map((offer) => {
    const obj = {
      id: offer.id,
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    };

    return obj;
  });

  // Если открыта страница Room, то получаем 4 пина на карте и выделяем оранжевым один
  if (currentOffer) {
    offerPins = [...offerPins, {
      id: currentOffer.id,
      lat: currentOffer.location.latitude,
      lng: currentOffer.location.longitude,
    }];

    hoveredCity = currentOffer.id;
  }

  // Берет первый объект из массива
  const center = offerCity[0];

  // Пины на карте
  const mapRef = useRef(null);
  const map = useMap(mapRef, center);


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
      map.setView({
        lat: center.latitude,
        lng: center.longitude,
      });
      offerPins.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: (point.id === hoveredCity)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offerPins, currentCustomIcon, defaultCustomIcon, hoveredCity, center]);

  return (
    <div
      style={{ width: '100%', height: 'inherit' }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;

