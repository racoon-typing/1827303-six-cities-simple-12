type FieldChangeHandle = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

type RatingProps = {
  onChangeHandler: FieldChangeHandle;
};

function Rating({onChangeHandler}: RatingProps) {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
        onChange={() => onChangeHandler() as FieldChangeHandle}
      />
      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}


export default Rating;

