import { MAX_GRADE } from '../../consts/consts';

type RatingProps = {
  onChange: (data: number) => void;
  valueName: string;
  id: number;
  isDisabled: boolean;
}

function Rating({onChange, valueName, id, isDisabled}: RatingProps) {

  const handleStar = () => {
    const grade = MAX_GRADE - id;
    onChange(grade);
  };

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={valueName} id={`${id}-stars`} type="radio"
        onChange={handleStar}
        disabled={isDisabled}
      />
      <label htmlFor={`${id}-stars`} className="reviews__rating-label form__rating-label" title={valueName}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Rating;
