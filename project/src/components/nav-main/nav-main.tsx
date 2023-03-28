import { Link } from 'react-router-dom';
import { changeCity } from '../../store/action';
// import { changeOfferList } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
// import { ConstructorRoom } from '../../types/offer';

type NavMainProps = {
  value: string;
  activeCity: string;
  // needOffers: ConstructorRoom[];
};


function NavMain({ value, activeCity,
  //  needOffers
}: NavMainProps) {

  const dispatch = useAppDispatch();

  // const needOffers = useAppSelector((state) => state.offers);

  // const onUserClick = (someOffers: ConstructorRoom[], cityName: string): void => {
  //   dispatch(changeCity({ activeCity: value }));
  //   // dispatch(changeOfferList({someOffers: needOffers, cityName: value}));
  // };

  return (
    <Link to={'/'} className={`locations__item-link tabs__item ${activeCity === value ? 'tabs__item--active' : ''}`}
      // onClick={() => dispatch(changeCity({ activeCity: value }))}
      onClick={() => dispatch(changeCity({ activeCity: value }))}
    >
      <span>{value}</span>
    </Link>
  );
}

export default NavMain;
