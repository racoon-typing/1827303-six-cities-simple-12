import React from 'react';
import { Link } from 'react-router-dom';

type NavMainProps = {
  value: string;
  onClickHandler: (idx: string) => void;
  isActive?: boolean[];
  id?: number;
};

function NavMain({ value, onClickHandler, isActive, id }: NavMainProps) {

  function changeCity(evt: React.MouseEvent<HTMLAnchorElement>) {
    const target = evt.target;
    const CityName = ((target as Element).closest('span') as HTMLElement).textContent;
    onClickHandler(CityName as string);
  }


  return (
    <li className="locations__item">
      <Link to={'/'} className={'locations__item-link tabs__item'} onClick={changeCity}>
        <span>{value}</span>
      </Link>
    </li>
  );
}

export default NavMain;
