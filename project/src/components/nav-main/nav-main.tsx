import { Link } from 'react-router-dom';
import { changeCity } from '../../store/action';
import { changeOfferList } from '../../store/action';
import { useAppDispatch } from '../../hooks/index';
import { memo } from 'react';

type NavMainProps = {
  value: string;
  activeCity: string;
};


function NavMain({ value, activeCity }: NavMainProps) {

  const dispatch = useAppDispatch();

  const onUserClick = (): void => {
    dispatch(changeCity({ activeCity: value }));
    dispatch(changeOfferList({ cityName: value }));
  };

  return (
    <Link to={'/'} className={`locations__item-link tabs__item ${activeCity === value ? 'tabs__item--active' : ''}`}
      onClick={onUserClick}
    >
      <span>{value}</span>
    </Link>
  );
}

export default memo(NavMain, (prevProps, nextProps) => prevProps.activeCity === nextProps.activeCity);
