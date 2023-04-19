import { mainProcess } from './main-process';
import {changeCity, hoverCity} from './main-process';

describe('Reducer: mainProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(mainProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({ city: 'Paris', hoverCity: 0 });
  });

  it('should return city value', () => {
    const state = {city: 'Paris', hoverCity: 0};
    expect(mainProcess.reducer(state, changeCity({activeCity: 'Amsterdam'})))
      .toEqual({ city: 'Amsterdam', hoverCity: 0});
  });

  it('should return Id hovered city', () => {
    const state = {city: 'Paris', hoverCity: 0};
    expect(mainProcess.reducer(state, hoverCity({hoveredCity: 5})))
      .toEqual({city: 'Paris', hoverCity: 5});
  });
});
