import { TypeRoom } from '../../mocks/offers';

type CitiesCardProps = {
  value: TypeRoom;
};

function CitiesCard({value}: CitiesCardProps): JSX.Element {
  const {roomName, price, type, level} = value;
  // console.log(value);

  return (
    <article className="cities__card place-card">
      <div className="place-card__mark">
        <span>{level}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place apartment" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{roomName}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CitiesCard;
