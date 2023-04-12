import { NameSpace } from '../../consts/consts';
import { State } from '../../types/state';

export const getCity = (state: State): string => state[NameSpace.Main].city;
export const getOfferId = (state: State): number => state[NameSpace.Main].hoverCity;
