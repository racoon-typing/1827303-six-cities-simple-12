import { mainProcess } from './main-process';
import {changeCity, hoverCity} from './main-process';


describe('Reducer: mainProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(mainProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({city: 'Paris', hoverCity: 0});
  }
});
