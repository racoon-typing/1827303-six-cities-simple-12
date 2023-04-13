import { Link } from 'react-router-dom';
// import { changeCity } from '../../store/action';
// import { changeOfferList } from '../../store/action';
import { useAppDispatch } from '../../hooks/index';
import { memo, useCallback } from 'react';
import { changeCity } from '../../store/main-process/main-process';
import { changeOfferList } from '../../store/data-process/data-process';

type NavMainProps = {
  value: string;
  activeCity: string;
};

function NavMain({ value, activeCity }: NavMainProps) {

  const dispatch = useAppDispatch();

  const onUserClick = useCallback(
    (): void => {
      dispatch(changeCity({ activeCity: value }));
      dispatch(changeOfferList({ cityName: value }));
    }, [value, dispatch]
  );

  return (
    <Link to={'/'} className={`locations__item-link tabs__item ${activeCity === value ? 'tabs__item--active' : ''}`}
      onClick={onUserClick}
    >
      <span>{value}</span>
    </Link>
  );
}

export default memo(NavMain);
