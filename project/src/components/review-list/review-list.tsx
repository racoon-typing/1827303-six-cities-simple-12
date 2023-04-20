import { Review } from '../../types/review';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Review[];
};

function ReviewList({ reviews }: ReviewListProps) {

  // Функция сортировки комментриев по новизне
  function sortComment(date1: string, date2: string) {
    const dateFirst = new Date(date1).valueOf();
    const dateSecond = new Date(date2).valueOf();

    return (dateSecond - dateFirst);
  }

  // Копия массива
  const newArrReview = reviews.slice();
  // Сортированный массив по новизне
  const sortReview = newArrReview.sort((a: Review, b: Review) => sortComment(a.date, b.date));

  // Получает массив отзывов не больше 10 элементов
  const isMax = reviews.length >= 10 ? 10 : reviews.length;
  const maxReview = sortReview.slice(0, isMax);


  return (
    <ul className="reviews__list">
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

