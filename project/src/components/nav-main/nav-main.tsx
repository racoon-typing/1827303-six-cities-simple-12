import React from 'react';
import { Link } from 'react-router-dom';

type NavMainProps = {
  value: string;
  onClickHandler: (idx: string) => void;
  activeCity: string;
};

function NavMain({ value, onClickHandler, activeCity }: NavMainProps) {
  function changeCity(evt: React.MouseEvent<HTMLAnchorElement | undefined>) {
    const target = evt.target;

    const CityName = ((target as Element).closest('span') as HTMLElement).textContent;
    onClickHandler(CityName as string);
  }

  return (
    <Link to={'/'} className={`locations__item-link tabs__item ${activeCity === value ? 'tabs__item--active' : ''}`} onClick={changeCity}>
      <span>{value}</span>
    </Link>
  );
}

export default NavMain;
