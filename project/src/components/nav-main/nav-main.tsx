import { Link } from 'react-router-dom';
import { changeCity } from '../../store/action';
import { useAppDispatch } from '../../hooks/index';

type NavMainProps = {
  value: string;
  activeCity: string;
};

function NavMain({ value, activeCity }: NavMainProps) {


  const dispatch = useAppDispatch();

  return (
    <Link to={'/'} className={`locations__item-link tabs__item ${activeCity === value ? 'tabs__item--active' : ''}`}
      onClick={() => dispatch(changeCity({ activeCity: value }))}
    >
      <span>{value}</span>
    </Link>
  );
}

export default NavMain;
