// import leaflet from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { ConstructorRoom } from '../../mocks/offers';
import useMap from './useMap';
// import classes from './map.module.css';


type MapProps = {
  offers: ConstructorRoom[];
};

export type Apartment = {
  id: number;
  latitude: number;
  longitude: number;
}

export type OfferArr = {
  name: string;
  latitude: number;
  longitude: number;
  zoom: number;
  apartments?: Apartment[];
}

const GET_CITY = 'Amsterdam';

function Map({ offers }: MapProps) {
  // Создает массив объект с данными для отрисовки карты
  let offer = {};
  const getNewObj = offers.forEach((i)=> {
    if (GET_CITY !== i.city.name) {
      return;
    }

    const nameCity = i.city.name;
    const locationCiti = i.city.location;
    const { latitude, longitude, zoom } = locationCiti;

    offer = {
      name: nameCity,
      latitude: latitude,
      longitude: longitude,
      zoom: zoom,
      apartments: [],
    };

    const item = offers.map((el, index) => {
      const { location } = el;

      const itemObj = {
        id: index,
        latitude: location.latitude,
        longitude: location.longitude,
      };

      return itemObj;
    });

    offer.apartments.push(item);
  });

  console.log(offer);

  const mapRef = useRef(null);
  const map = useMap(mapRef, offer);


  return (
    <section className='cities__map map' ref={mapRef}>
      <p>Text</p>
      <p>Text</p>
    </section>
  );
}

export default Map;
