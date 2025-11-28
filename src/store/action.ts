import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const setCity = createAction<string>('app/setCity');
export const setOffers = createAction<Offer[]>('app/setOffers');
