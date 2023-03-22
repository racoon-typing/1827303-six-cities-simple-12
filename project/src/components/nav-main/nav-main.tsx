import React from 'react';
import { Link } from 'react-router-dom';

type NavMainProps = {
  value: string;
  onClickHandler: (idx: string) => void;
};

function NavMain({ value, onClickHandler}: NavMainProps) {
  function changeCity(evt: React.MouseEvent<HTMLAnchorElement | undefined>) {
    const target = evt.target;
    const CityName = ((target as Element).closest('span') as HTMLElement).textContent;
    onClickHandler(CityName as string);
  }

  return (
    <Link to={'/'} className={'locations__item-link tabs__item'} onClick={changeCity} >
      <span>{value}</span>
    </Link>
  );
}

export default NavMain;
