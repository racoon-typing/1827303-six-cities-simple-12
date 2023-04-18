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


  // function sortComment(date1: string, date2: string) {
  //   const dateFirst = new Date(date1).getTime();
  //   const dateSecond = new Date(date2).getTime();

  //   return dateFirst - dateSecond;
  // }

  return (
    <ul className="reviews__list">
      {/* {
        maxReview.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? 1 : -1).map((review, id) => (
          <li key={`${id * 10}`} className="reviews__item">
            <ReviewItem review={review} />
          </li>
        ))
      } */}
      {
        maxReview.map((review, id) => (
          <li key={`${id * 10}`} className="reviews__item">
            <ReviewItem review={review} />
          </li>
        ))
      }
    </ul>
  );
}

export default ReviewList;

