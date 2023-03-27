import {createAction} from '@reduxjs/toolkit';
import { ConstructorRoom } from '../types/offer';

export const changeCity = createAction<{activeCity: string}>('main/changeCity');
export const changeOfferList = createAction<{someOffers: ConstructorRoom[]; cityName: string}>('main/filterCities');
