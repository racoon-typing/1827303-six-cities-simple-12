import {createAction} from '@reduxjs/toolkit';
import {ConstructorRoom} from '../types/offer';

export const changeCity = createAction<{activeCity: string}>('main/changeCity');
export const changeOfferList = createAction<{cityName: string}>('main/filterCities');
export const hoverCity = createAction<{hoveredCity: number}>('main/hoverCity');
export const changeOption = createAction<{filterName: string}>('main/changeOption');
export const filterCity = createAction<{activeOption: string}>('main/filterCity');
export const loadOffers = createAction<ConstructorRoom[]>('data/loadOffers');
export const setLoadOffersStatus = createAction<boolean>('data/setLoadOffersStatus');
