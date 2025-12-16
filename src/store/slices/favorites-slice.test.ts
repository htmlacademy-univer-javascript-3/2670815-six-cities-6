import { describe, it, expect } from 'vitest';
import favoritesReducer from './favorites-slice';
import { fetchFavorites, toggleFavorite } from '../action';
import type { Offer } from '../../types/offer';

describe('favoritesSlice', () => {
  const initialState = {
    favorites: [],
    isFavoritesLoading: false,
    hasFavoritesError: false,
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
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
  };

  it('должен вернуть начальное состояние при неизвестном действии', () => {
    expect(favoritesReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(initialState);
  });

  describe('fetchFavorites', () => {
    it('должен установить isFavoritesLoading в true при pending', () => {
      const state = favoritesReducer(initialState, fetchFavorites.pending('', undefined));
      expect(state.isFavoritesLoading).toBe(true);
      expect(state.hasFavoritesError).toBe(false);
    });

    it('должен установить favorites и isFavoritesLoading в false при fulfilled', () => {
      const favorites = [mockOffer];
      const state = favoritesReducer(
        initialState,
        fetchFavorites.fulfilled(favorites, '', undefined)
      );
      expect(state.favorites).toEqual(favorites);
      expect(state.isFavoritesLoading).toBe(false);
    });

    it('должен заменить существующие избранные новыми', () => {
      const stateWithFavorites = {
        ...initialState,
        favorites: [mockOffer],
      };
      const newOffer = { ...mockOffer, id: '2', title: 'New Offer' };
      const state = favoritesReducer(
        stateWithFavorites,
        fetchFavorites.fulfilled([newOffer], '', undefined)
      );
      expect(state.favorites).toEqual([newOffer]);
      expect(state.favorites).toHaveLength(1);
    });

    it('должен установить hasFavoritesError в true при rejected', () => {
      const state = favoritesReducer(initialState, fetchFavorites.rejected(null, '', undefined));
      expect(state.isFavoritesLoading).toBe(false);
      expect(state.hasFavoritesError).toBe(true);
    });

    it('должен очистить ошибку при новом запросе', () => {
      const stateWithError = {
        ...initialState,
        hasFavoritesError: true,
      };
      const state = favoritesReducer(stateWithError, fetchFavorites.pending('', undefined));
      expect(state.hasFavoritesError).toBe(false);
    });
  });

  describe('toggleFavorite', () => {
    it('должен добавить предложение в избранное если его там не было', () => {
      const favoriteOffer = { ...mockOffer, isFavorite: true };
      const state = favoritesReducer(
        initialState,
        toggleFavorite.fulfilled(favoriteOffer, '', { offerId: '1', status: 1 })
      );
      expect(state.favorites).toContain(favoriteOffer);
      expect(state.favorites).toHaveLength(1);
    });

    it('должен обновить предложение если оно уже в избранном', () => {
      const existingOffer = { ...mockOffer, price: 100 };
      const stateWithFavorite = {
        ...initialState,
        favorites: [existingOffer],
      };
      const updatedOffer = { ...mockOffer, price: 150, isFavorite: true };
      const state = favoritesReducer(
        stateWithFavorite,
        toggleFavorite.fulfilled(updatedOffer, '', { offerId: '1', status: 1 })
      );
      expect(state.favorites).toHaveLength(1);
      expect(state.favorites[0].price).toBe(150);
    });

    it('должен удалить предложение из избранного при isFavorite = false', () => {
      const stateWithFavorite = {
        ...initialState,
        favorites: [mockOffer],
      };
      const removedOffer = { ...mockOffer, isFavorite: false };
      const state = favoritesReducer(
        stateWithFavorite,
        toggleFavorite.fulfilled(removedOffer, '', { offerId: '1', status: 0 })
      );
      expect(state.favorites).toHaveLength(0);
      expect(state.favorites).not.toContain(mockOffer);
    });

    it('должен корректно работать с несколькими избранными', () => {
      const offer1 = { ...mockOffer, id: '1' };
      const offer2 = { ...mockOffer, id: '2' };
      const stateWithFavorites = {
        ...initialState,
        favorites: [offer1, offer2],
      };
      const removedOffer = { ...offer1, isFavorite: false };
      const state = favoritesReducer(
        stateWithFavorites,
        toggleFavorite.fulfilled(removedOffer, '', { offerId: '1', status: 0 })
      );
      expect(state.favorites).toHaveLength(1);
      expect(state.favorites[0].id).toBe('2');
    });

    it('не должен добавлять дубликаты при добавлении уже существующего', () => {
      const stateWithFavorite = {
        ...initialState,
        favorites: [mockOffer],
      };
      const sameOffer = { ...mockOffer, isFavorite: true };
      const state = favoritesReducer(
        stateWithFavorite,
        toggleFavorite.fulfilled(sameOffer, '', { offerId: '1', status: 1 })
      );
      expect(state.favorites).toHaveLength(1);
    });

    it('должен корректно работать с пустым списком при удалении', () => {
      const removedOffer = { ...mockOffer, isFavorite: false };
      const state = favoritesReducer(
        initialState,
        toggleFavorite.fulfilled(removedOffer, '', { offerId: '1', status: 0 })
      );
      expect(state.favorites).toHaveLength(0);
    });
  });
});
