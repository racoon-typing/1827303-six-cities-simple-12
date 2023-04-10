import ReviewRoom from '../review-room/review-room';
import { ConstructorRoom } from '../../types/offer';
import { Review } from '../../types/review';

type CurrentOfferScreenProps = {
  offer: ConstructorRoom;
  reviews: Review[];
  roomId: string | undefined;
};

function CurrentOffer({ offer, reviews, roomId }: CurrentOfferScreenProps): JSX.Element {
  const { images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host, description } = offer;
  const { avatarUrl, name: hostName, isPro } = host;
  const starWidth = `${Math.round(rating) / 5 * 100}%`;

  return (
    <>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {
            images.map((image, id) => (
              <img key={`${id * 10}`} className="property__image" src={image} alt="Studio-1" />
            ))
          }
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium ? (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          ) : (
            ''
          )}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: starWidth }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {
                goods.map((good, id) => (
                  <li key={`${id * 10}`} className="property__inside-item">
                    {good}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {hostName}
              </span>
              <span className="property__user-status">
                {isPro ? 'Pro' : ''}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
              {/* <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p> */}
            </div>
          </div>
          <ReviewRoom reviews={reviews} />
        </div>
      </div>
    </>
  );
}

export default CurrentOffer;
