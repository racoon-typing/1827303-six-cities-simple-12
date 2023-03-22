type RatingProps = {
  onChange: (data: HTMLInputElement) => void;
  value: string;
  id: number;
  // starId: string;
  // title: string;
}

function Rating({onChange, value,
  id
  //  starId, title
}: RatingProps) {

  const handleStar = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const data = evt.target;
    onChange(data);
  };

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${id}-stars`} type="radio"
        onChange={handleStar}
      />
      <label htmlFor={`${id}-stars`} className="reviews__rating-label form__rating-label" title={value}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Rating;
