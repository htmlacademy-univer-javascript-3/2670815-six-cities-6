import { describe, it, expect } from 'vitest';
import offersReducer, { setCity, setOffers } from './offers-slice';
import { fetchOffers, fetchOffer, fetchNearbyOffers, toggleFavorite } from '../action';
import type { Offer } from '../../types/offer';

describe('offersSlice', () => {
  const initialState = {
    currentCity: 'Paris',
    offers: [],
    isOffersLoading: false,
    hasError: false,
    currentOffer: null,
    isOfferLoading: false,
    hasOfferError: false,
    nearbyOffers: [],
    isNearbyOffersLoading: false,
    hasNearbyOffersError: false,
  };

  const mockOffer: Offer = {
    id: '1',
    title: 'Test Offer',
    type: 'apartment',
    price: 100,
    previewImage: 'img.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
  };

  it('должен вернуть начальное состояние при неизвестном действии', () => {
    expect(offersReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(initialState);
  });

  describe('синхронные действия', () => {
    it('должен изменить текущий город', () => {
      const state = offersReducer(initialState, setCity('Amsterdam'));
      expect(state.currentCity).toBe('Amsterdam');
    });

    it('должен установить список предложений', () => {
      const offers = [mockOffer];
      const state = offersReducer(initialState, setOffers(offers));
      expect(state.offers).toEqual(offers);
    });
  });

  describe('fetchOffers', () => {
    it('должен установить isOffersLoading в true при pending', () => {
      const state = offersReducer(initialState, fetchOffers.pending('', undefined));
      expect(state.isOffersLoading).toBe(true);
      expect(state.hasError).toBe(false);
    });

    it('должен установить offers и isOffersLoading в false при fulfilled', () => {
      const offers = [mockOffer];
      const state = offersReducer(initialState, fetchOffers.fulfilled(offers, '', undefined));
      expect(state.offers).toEqual(offers);
      expect(state.isOffersLoading).toBe(false);
    });

    it('должен установить hasError в true при rejected', () => {
      const state = offersReducer(initialState, fetchOffers.rejected(null, '', undefined));
      expect(state.isOffersLoading).toBe(false);
      expect(state.hasError).toBe(true);
    });
  });

  describe('fetchOffer', () => {
    it('должен установить isOfferLoading в true при pending', () => {
      const state = offersReducer(initialState, fetchOffer.pending('', '1'));
      expect(state.isOfferLoading).toBe(true);
      expect(state.hasOfferError).toBe(false);
    });

    it('должен установить currentOffer при fulfilled', () => {
      const state = offersReducer(initialState, fetchOffer.fulfilled(mockOffer, '', '1'));
      expect(state.currentOffer).toEqual(mockOffer);
      expect(state.isOfferLoading).toBe(false);
    });

    it('должен установить hasOfferError в true при rejected', () => {
      const state = offersReducer(initialState, fetchOffer.rejected(null, '', '1'));
      expect(state.isOfferLoading).toBe(false);
      expect(state.hasOfferError).toBe(true);
    });
  });

  describe('fetchNearbyOffers', () => {
    it('должен установить isNearbyOffersLoading в true при pending', () => {
      const state = offersReducer(initialState, fetchNearbyOffers.pending('', '1'));
      expect(state.isNearbyOffersLoading).toBe(true);
      expect(state.hasNearbyOffersError).toBe(false);
    });

    it('должен установить nearbyOffers при fulfilled', () => {
      const offers = [mockOffer];
      const state = offersReducer(initialState, fetchNearbyOffers.fulfilled(offers, '', '1'));
      expect(state.nearbyOffers).toEqual(offers);
      expect(state.isNearbyOffersLoading).toBe(false);
    });

    it('должен установить hasNearbyOffersError в true при rejected', () => {
      const state = offersReducer(initialState, fetchNearbyOffers.rejected(null, '', '1'));
      expect(state.isNearbyOffersLoading).toBe(false);
      expect(state.hasNearbyOffersError).toBe(true);
    });
  });

  describe('toggleFavorite', () => {
    it('должен обновить предложение в списке offers', () => {
      const stateWithOffers = {
        ...initialState,
        offers: [mockOffer],
      };
      const updatedOffer = { ...mockOffer, isFavorite: true };
      const state = offersReducer(
        stateWithOffers,
        toggleFavorite.fulfilled(updatedOffer, '', { offerId: '1', status: 1 })
      );
      expect(state.offers[0].isFavorite).toBe(true);
    });

    it('должен обновить currentOffer если id совпадает', () => {
      const stateWithOffer = {
        ...initialState,
        currentOffer: mockOffer,
      };
      const updatedOffer = { ...mockOffer, isFavorite: true };
      const state = offersReducer(
        stateWithOffer,
        toggleFavorite.fulfilled(updatedOffer, '', { offerId: '1', status: 1 })
      );
      expect(state.currentOffer?.isFavorite).toBe(true);
    });

    it('должен обновить предложение в nearbyOffers', () => {
      const stateWithNearby = {
        ...initialState,
        nearbyOffers: [mockOffer],
      };
      const updatedOffer = { ...mockOffer, isFavorite: true };
      const state = offersReducer(
        stateWithNearby,
        toggleFavorite.fulfilled(updatedOffer, '', { offerId: '1', status: 1 })
      );
      expect(state.nearbyOffers[0].isFavorite).toBe(true);
    });

    it('не должен изменять состояние если предложение не найдено', () => {
      const anotherOffer = { ...mockOffer, id: '2' };
      const state = offersReducer(
        initialState,
        toggleFavorite.fulfilled(anotherOffer, '', { offerId: '2', status: 1 })
      );
      expect(state).toEqual(initialState);
    });
  });
});
