import { useMemo, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Rating from '../rating/rating';
import { sendCommentAction } from '../../store/api-actions';
import { RATINGS, MAX_GRADE, MAX_TEXT_COMMENT, MIN_TEXT_COMMENT } from '../../consts/consts';
import { getErrorStatusReviews, getisDisabledStatusForm } from '../../store/data-process/selectors';
import './review-form.css';

type ReviewFormProps = {
  roomId: string | undefined;
}

export function ReviewForm({ roomId }: ReviewFormProps): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    comment: '',
    rating: 0,
  });

  // Получает изменения рейтинга
  const handleInputChange = (data: number) => {
    setFormData({ ...formData, rating: data });
  };

  // Получает изменения комментария
  const handleTextareaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    setFormData({ ...formData, comment: value });
  };

  // Флаг для блокирования формы во время отправки комментария
  const isDisabledForm = useAppSelector(getisDisabledStatusForm);

  // Ошибка при загрузке коммента
  const erorrStatus = useAppSelector(getErrorStatusReviews);

  // Условие для блокирования кнопки
  const isDisabledMemo = useMemo(() => {
    const isDisabled = formData.rating === 0 || formData.comment === '' || formData.comment.length < MIN_TEXT_COMMENT || formData.comment.length > MAX_TEXT_COMMENT;
    return isDisabled;
  }, [formData]);

  // Объект для отправки на сервер
  const mySendData = {
    offerId: roomId,
    datas: formData,
  };

  const dispatch = useAppDispatch();

  // Функция отправки данных на сервер
  function sendData(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.preventDefault();

    dispatch(sendCommentAction(mySendData));

    setFormData({
      comment: '',
      rating: 0
    });

    formRef.current?.reset();

    if (formData.rating) {
      const grade = MAX_GRADE - formData.rating;
      const ratingElement = document.getElementById(`${grade}-stars`);
      if (ratingElement) {
        (ratingElement as HTMLInputElement).checked = false;
      }
    }
  }


  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      ref={formRef}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((rating, id) => (
          <Rating onChange={handleInputChange} key={`${id * 10}`} valueName={rating} isDisabled={isDisabledForm} id={id} />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        value={formData.comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextareaChange}
        disabled={isDisabledForm}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          onClick={(evt) => sendData(evt)}
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabledMemo}
        >
          Submit
        </button>
      </div>
      {erorrStatus ? (
        <p className='revew__error-send'>
          Ошибка при отправке комментария. Повторите попытку.
        </p>
      ) : null}
    </form>
  );
}

export default ReviewForm;
