import { useCallback } from 'react';
import { Review } from '../../types/review';

type ReviewItemProps = {
  review: Review;
};

function ReviewItem({ review }: ReviewItemProps) {
  const { user, rating, comment, date } = review;
  const { name, avatarUrl } = user;
  const starWidth = Math.round(rating) / 5 * 100;

  // Получаем дату в нужном формате
  const getDateComment = useCallback(() => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateComment = new Date(date);
    const month = dateComment.getMonth();
    const year = dateComment.getFullYear();

    const formatDate = `${monthNames[month]} ${year}`;
    return formatDate;
  }, [date]);

  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: starWidth }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{getDateComment()}</time>
      </div>
    </>
  );
}

export default ReviewItem;
