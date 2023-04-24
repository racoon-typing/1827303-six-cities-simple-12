import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import { APIRoute } from '../consts/consts';
import { State } from '../types/state';
import { makeFakeOfferList } from '../utils/mocks';
import { AuthData, fetchOffersAction } from './api-actions';

const mockOfferList = makeFakeOfferList();

// fetchOffersAction
describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should return OfferList when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type
    ]);
  });

  // it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
  //   const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

  //   mockAPI
  //     .onPost(APIRoute.Login)
  //     .reply(200, {token: 'secret'});

  //   const store = mockStore();
  //   Storage.prototype.setItem = jest.fn();
  // });

});
