import Main from '../../pages/main/main';
// import Login from '../../pages/login/login';
// import Room from '../../pages/room/room';

type AppScreenProps = {
  numOfFlat: number;
}

function App({ numOfFlat }: AppScreenProps): JSX.Element {
  return (
    <Main numOfFlat={numOfFlat} />
  );
}

export default App;
