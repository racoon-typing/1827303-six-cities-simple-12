import { Review } from '../../types/review';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Review[];
};

function ReviewList({ reviews }: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review, id) => (
        <li key={`${id * 10}`} className="reviews__item">
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;

