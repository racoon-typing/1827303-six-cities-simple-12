import { useState } from 'react';


const options = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];


function SortOptions() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOffer, setSortOffer] = useState('');

  // const onClickHandler = (item: HTMLElement) => {
  //   const items = item.innerText;

  //   setSortOffer(items);
  //   setIsOpen(false);
  // };


  const openPopup = () => {
    if (isOpen) {
      return setIsOpen(false);
    } else {
      return setIsOpen(true);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}
        onClick={openPopup}
      >
        {sortOffer !== '' ? sortOffer : 'Popular'}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}
        // onClick={(evt) => onClickHandler(evt.target)}
      >
        {options.map((option, id) => (
          <li key={`${id * 10}`} className={`places__option ${sortOffer === option ? 'places__option--active' : ''}`} tabIndex={0}>{option}</li>
        ))}
      </ul>
    </form >
  );
}

export default SortOptions;
