import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthData, loginAction } from '../../store/api-actions';
import { FormEvent, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CITIES } from '../../consts/consts';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { changeCity } from '../../store/main-process/main-process';
import { changeOfferList } from '../../store/data-process/data-process';


function Login() {
  const randomCity = CITIES[Math.floor(Math.random() * 6)];

  function changeFilter() {
    dispatch(changeCity({activeCity: randomCity}));
    dispatch(changeOfferList({ cityName: randomCity }));
  }

  const authStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authStatus === 'AUTH';

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  function onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  if (isAuth) {
    return <Navigate to='/'></Navigate>;
  }

  return (
    <>
      <Helmet>
        <title>Зарегистриуйся</title>
      </Helmet>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleSubmit}
              className="login__form form"
              action="#"
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" minLength={2} required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/" onClick={changeFilter}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Login;
