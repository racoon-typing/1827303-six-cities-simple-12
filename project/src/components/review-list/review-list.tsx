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

  // console.log(reviews);
  // console.log(reviews[0].date);
  // console.log(typeof reviews[0].date);
  // console.log(new Date(reviews[0].date));

  // const myDate = new Date(reviews[0].date);
  // console.log(myDate.parse);


  // sort((a, b) => a.date - b.date)
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

