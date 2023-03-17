
type RatingProps = {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  starId: string;
  title: string;
}


function Rating({onChange, value, starId, title}: RatingProps) {

  const handleStar = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target);
  };

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${starId}-stars`} type="radio"
        onChange={handleStar}
      />
      <label htmlFor={`${starId}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Rating;
