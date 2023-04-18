import { memo, useMemo } from 'react';
import NavMain from '../nav-main/nav-main';
import { Cities } from '../../consts/consts';

type CityListProps = {
  activeCity: string;
}

function CityList({activeCity}: CityListProps):JSX.Element {
  const memoCity = useMemo((): string[] => Cities, []);

  return (
    <ul className="locations__list tabs__list">
      {memoCity.map((city, id) => (
        <li className="locations__item" key={`${id * 10}-city`}>
          <NavMain value={city} activeCity={activeCity} />
        </li>
      ))}
    </ul>
  );
}

export default memo(CityList, (prevProps, nextProps) => prevProps.activeCity === nextProps.activeCity);
