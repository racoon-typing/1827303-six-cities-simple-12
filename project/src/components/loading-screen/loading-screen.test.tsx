import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import { HelmetProvider } from 'react-helmet-async';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <LoadingScreen />
        </HelmetProvider>
      </HistoryRouter>
    );

    const loadingText = screen.getByText('Loading ...');

    expect(loadingText).toBeInTheDocument();
  });
});
