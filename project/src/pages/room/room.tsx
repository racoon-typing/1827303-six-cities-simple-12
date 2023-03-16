import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Comment from '../../components/comment/comment';
import { ConstructorRoom } from '../../mocks/offers';

type RoomScreenProps = {
  offers: ConstructorRoom[];
};

function Room({ offers }: RoomScreenProps): JSX.Element {
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

      <Comment offer={currentOffer as ConstructorRoom}/>
    </>
  );
}

export default Room;
