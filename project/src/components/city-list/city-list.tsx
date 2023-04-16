import { memo } from 'react';
import NavMain from '../nav-main/nav-main';

const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

type CityListProps = {
  activeCity: string;
}

function CityList({activeCity}: CityListProps):JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city, id) => (
        <li className="locations__item" key={`${id * 10}-city`}>
          <NavMain value={city} activeCity={activeCity} />
        </li>
      ))}
    </ul>
  );
}

export default memo(CityList, (prevProps, nextProps) => prevProps.activeCity === nextProps.activeCity);
