import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from './not-found';
import HistoryRouter from '../../components/history-route/history-route';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history} >
        <HelmetProvider>
          <NotFound />
        </HelmetProvider>
      </HistoryRouter>
    );

    const erorr = screen.getByText('404');
    const headerElement = screen.getByText('Not Found');
    const linkElement = screen.getByText('На главную');

    expect(erorr).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
