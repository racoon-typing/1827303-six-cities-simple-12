import { Review } from '../../types/review';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Review[];
};

function ReviewList({ reviews }: ReviewListProps) {

  let maxReview = reviews;
  if (reviews.length > 10) {
    maxReview = reviews.slice(0, 10);
  }

  return (
    <ul className="reviews__list">
      {maxReview.map((review, id) => (
        <li key={`${id * 10}`} className="reviews__item">
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;

