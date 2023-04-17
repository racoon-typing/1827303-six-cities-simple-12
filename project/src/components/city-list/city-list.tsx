import { memo, useMemo } from 'react';
import NavMain from '../nav-main/nav-main';


type CityListProps = {
  activeCity: string;
}

function CityList({activeCity}: CityListProps):JSX.Element {
  const memoCity = useMemo((): string[] => {
    const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
    return Cities;
  }, []);

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
