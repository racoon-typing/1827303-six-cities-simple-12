import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './style.css';

function NotFound(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>

      <section className='not-found'>
        <div className='not-found__content'>
          <h1 className='not-found__title'>404</h1>

          <p className="not-found__text">
            Not Found
          </p>

          <Link className='not-found__link' to="/">
            На главную
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;
