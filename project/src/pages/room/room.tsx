import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Comment from '../../components/comment/comment';
import { ConstructorRoom } from '../../mocks/offers';

type RoomScreenProps = {
  offers: ConstructorRoom[];
};

function Room({ offers }: RoomScreenProps): JSX.Element {
  const { id } = useParams();
  const offerNumber = Number(id) - 1;

  return (
    <>
      <Helmet>
        <title>Старница с предложением номера</title>
      </Helmet>

      <Comment offer={offers[offerNumber]}/>
    </>
  );
}

export default Room;
