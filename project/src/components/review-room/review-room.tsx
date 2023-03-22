import Rating from '../rating/rating';
import { useState } from 'react';
import { Review } from '../../types/review';
import ReviewList from '../review-list/review-list';

const ratings = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

type ReviewRoomProps = {
  reviews: Review[];
}

function ReviewRoom({reviews}: ReviewRoomProps) {
  const [formData, setFormData] = useState({
    rating: '',
    review: ''
  });

  const handleInputChange = (data: HTMLInputElement) => {
    const {name, value} = data;

    setFormData({...formData, [name]: value});
  };

  const handleTextareaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;

    setFormData({...formData, review: value});
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewList reviews={reviews}/>
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratings.map((rating, id) => (
            <Rating onChange={handleInputChange} key={`${id * 10}`} value={rating} id={id}/>
          ))}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleTextareaChange}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ReviewRoom;
