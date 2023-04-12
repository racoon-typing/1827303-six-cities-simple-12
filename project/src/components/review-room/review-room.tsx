import { Review } from '../../types/review';
import ReviewList from '../review-list/review-list';
import { useAppSelector } from '../../hooks';
import ReviewForm from '../review-form/review-from';

type ReviewRoomProps = {
  reviews: Review[];
  roomId: string | undefined;
}

function ReviewRoom({ reviews, roomId }: ReviewRoomProps): JSX.Element {
  const AuthStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuth = AuthStatus === 'AUTH';

  return (
    <section className="property__reviews reviews" >
      {isAuth ? (
        <>
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
          <ReviewList reviews={reviews} />
          <ReviewForm roomId={roomId} />
        </>
      ) : null}
    </section>
  );
}

export default ReviewRoom;
