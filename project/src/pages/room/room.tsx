import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Comment from '../../components/comment/comment';
import { ConstructorRoom } from '../../types/offer';
import { Review } from '../../types/review';

type RoomScreenProps = {
  offers: ConstructorRoom[];
  reviews: Review[];
};

function Room({ offers, reviews }: RoomScreenProps): JSX.Element {
  const { id } = useParams();

  const currentOffer = offers.find((item) => {
    const itemId = item.id;
    let result;

    if (itemId === Number(id)) {
      result = itemId;
      return result;
    }

    return result;
  });

  return (
    <>
      <Helmet>
        <title>Старница с предложением номера</title>
      </Helmet>

      <Comment offer={currentOffer as ConstructorRoom} reviews={reviews}/>
    </>
  );
}

export default Room;
