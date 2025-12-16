import { describe, it, expect, afterEach, vi } from 'vitest';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import { configureStore } from '@reduxjs/toolkit';
import {
  fetchOffers,
  fetchOffer,
  fetchNearbyOffers,
  fetchComments,
  postComment,
  toggleFavorite,
  fetchFavorites,
  checkAuth,
} from './action';
import { APIRoute } from '../services/api-routes';
import type { Offer } from '../types/offer';
import type { Comment } from '../types/comment';
import type { UserData } from '../types/auth';
import offersReducer from './slices/offers-slice';
import userReducer from './slices/user-slice';
import commentsReducer from './slices/comments-slice';
import favoritesReducer from './slices/favorites-slice';

describe('Async actions', () => {
  // Mock localStorage
  const localStorageMock = {
    getItem: vi.fn(() => null),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  };
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });

  const api = createAPI();
  const mockAPI = new MockAdapter(api);

  const createTestStore = () =>
    configureStore({
      reducer: {
        offers: offersReducer,
        user: userReducer,
        comments: commentsReducer,
        favorites: favoritesReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          thunk: {
            extraArgument: api,
          },
        }),
    });

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

  const mockComment: Comment = {
    id: '1',
    date: '2024-12-16T10:00:00.000Z',
    user: {
      name: 'Test User',
      avatarUrl: 'avatar.jpg',
      isPro: false,
    },
    comment: 'Great place!',
    rating: 5,
  };

  const mockUser: UserData = {
    name: 'Test User',
    avatarUrl: 'avatar.jpg',
    isPro: false,
    email: 'test@test.com',
    token: 'test-token',
  };

  afterEach(() => {
    mockAPI.reset();
  });

  describe('fetchOffers', () => {
    it('должен вернуть массив предложений при успешном запросе', async () => {
      const store = createTestStore();
      const offers = [mockOffer];
      mockAPI.onGet(APIRoute.Offers).reply(200, offers);

      const result = await store.dispatch(fetchOffers());

      expect(result.type).toBe('data/fetchOffers/fulfilled');
      expect(result.payload).toEqual(offers);
      expect(store.getState().offers.offers).toEqual(offers);
      expect(store.getState().offers.isOffersLoading).toBe(false);
    });

    it('должен установить hasError при ошибке запроса', async () => {
      const store = createTestStore();
      mockAPI.onGet(APIRoute.Offers).reply(500);

      const result = await store.dispatch(fetchOffers());

      expect(result.type).toBe('data/fetchOffers/rejected');
      expect(store.getState().offers.hasError).toBe(true);
      expect(store.getState().offers.isOffersLoading).toBe(false);
    });
  });

  describe('fetchOffer', () => {
    it('должен вернуть одно предложение при успешном запросе', async () => {
      const store = createTestStore();
      const offerId = '1';
      mockAPI.onGet(`${APIRoute.Offers}/${offerId}`).reply(200, mockOffer);

      const result = await store.dispatch(fetchOffer(offerId));

      expect(result.type).toBe('data/fetchOffer/fulfilled');
      expect(result.payload).toEqual(mockOffer);
      expect(store.getState().offers.currentOffer).toEqual(mockOffer);
    });

    it('должен установить hasOfferError при ошибке 404', async () => {
      const store = createTestStore();
      const offerId = 'non-existent';
      mockAPI.onGet(`${APIRoute.Offers}/${offerId}`).reply(404);

      const result = await store.dispatch(fetchOffer(offerId));

      expect(result.type).toBe('data/fetchOffer/rejected');
      expect(store.getState().offers.hasOfferError).toBe(true);
    });
  });

  describe('fetchNearbyOffers', () => {
    it('должен вернуть ближайшие предложения', async () => {
      const store = createTestStore();
      const offerId = '1';
      const nearbyOffers = [mockOffer, { ...mockOffer, id: '2' }];
      mockAPI.onGet(`${APIRoute.Offers}/${offerId}/nearby`).reply(200, nearbyOffers);

      const result = await store.dispatch(fetchNearbyOffers(offerId));

      expect(result.type).toBe('data/fetchNearbyOffers/fulfilled');
      expect(result.payload).toEqual(nearbyOffers);
      expect(result.payload).toHaveLength(2);
      expect(store.getState().offers.nearbyOffers).toEqual(nearbyOffers);
    });

    it('должен вернуть пустой массив если нет ближайших предложений', async () => {
      const store = createTestStore();
      const offerId = '1';
      mockAPI.onGet(`${APIRoute.Offers}/${offerId}/nearby`).reply(200, []);

      const result = await store.dispatch(fetchNearbyOffers(offerId));

      expect(result.type).toBe('data/fetchNearbyOffers/fulfilled');
      expect(result.payload).toEqual([]);
      expect(store.getState().offers.nearbyOffers).toEqual([]);
    });
  });

  describe('fetchComments', () => {
    it('должен вернуть комментарии для предложения', async () => {
      const store = createTestStore();
      const offerId = '1';
      const comments = [mockComment];
      mockAPI.onGet(`${APIRoute.Comments}/${offerId}`).reply(200, comments);

      const result = await store.dispatch(fetchComments(offerId));

      expect(result.type).toBe('data/fetchComments/fulfilled');
      expect(result.payload).toEqual(comments);
      expect(store.getState().comments.comments).toEqual(comments);
    });

    it('должен вернуть пустой массив если комментариев нет', async () => {
      const store = createTestStore();
      const offerId = '1';
      mockAPI.onGet(`${APIRoute.Comments}/${offerId}`).reply(200, []);

      const result = await store.dispatch(fetchComments(offerId));

      expect(result.type).toBe('data/fetchComments/fulfilled');
      expect(result.payload).toEqual([]);
      expect(store.getState().comments.comments).toEqual([]);
    });
  });

  describe('postComment', () => {
    it('должен создать новый комментарий', async () => {
      const store = createTestStore();
      const offerId = '1';
      const commentData = { comment: 'Great place!', rating: 5 };
      mockAPI.onPost(`${APIRoute.Comments}/${offerId}`, commentData).reply(200, mockComment);

      const result = await store.dispatch(postComment({ offerId, commentData }));

      expect(result.type).toBe('data/postComment/fulfilled');
      expect(result.payload).toEqual(mockComment);
      expect(store.getState().comments.comments).toContainEqual(mockComment);
      expect(store.getState().comments.isCommentPosting).toBe(false);
    });

    it('должен установить isCommentPosting в false при ошибке', async () => {
      const store = createTestStore();
      const offerId = '1';
      const commentData = { comment: 'Bad', rating: 0 };
      mockAPI.onPost(`${APIRoute.Comments}/${offerId}`).reply(400);

      const result = await store.dispatch(postComment({ offerId, commentData }));

      expect(result.type).toBe('data/postComment/rejected');
      expect(store.getState().comments.isCommentPosting).toBe(false);
    });
  });

  describe('toggleFavorite', () => {
    it('должен добавить предложение в избранное', async () => {
      const store = createTestStore();
      const offerId = '1';
      const status = 1;
      const favoriteOffer = { ...mockOffer, isFavorite: true };
      mockAPI.onPost(`${APIRoute.Favorite}/${offerId}/${status}`).reply(200, favoriteOffer);

      const result = await store.dispatch(toggleFavorite({ offerId, status }));

      expect(result.type).toBe('data/toggleFavorite/fulfilled');
      expect(result.payload).toEqual(favoriteOffer);
      expect((result.payload as Offer).isFavorite).toBe(true);
    });

    it('должен удалить предложение из избранного', async () => {
      const store = createTestStore();
      const offerId = '1';
      const status = 0;
      const notFavoriteOffer = { ...mockOffer, isFavorite: false };
      mockAPI.onPost(`${APIRoute.Favorite}/${offerId}/${status}`).reply(200, notFavoriteOffer);

      const result = await store.dispatch(toggleFavorite({ offerId, status }));

      expect(result.type).toBe('data/toggleFavorite/fulfilled');
      expect((result.payload as Offer).isFavorite).toBe(false);
    });

    it('должен вернуть rejected для неавторизованного пользователя', async () => {
      const store = createTestStore();
      const offerId = '1';
      const status = 1;
      mockAPI.onPost(`${APIRoute.Favorite}/${offerId}/${status}`).reply(401);

      const result = await store.dispatch(toggleFavorite({ offerId, status }));

      expect(result.type).toBe('data/toggleFavorite/rejected');
    });
  });

  describe('fetchFavorites', () => {
    it('должен вернуть список избранных предложений', async () => {
      const store = createTestStore();
      const favorites = [{ ...mockOffer, isFavorite: true }];
      mockAPI.onGet(APIRoute.Favorite).reply(200, favorites);

      const result = await store.dispatch(fetchFavorites());

      expect(result.type).toBe('data/fetchFavorites/fulfilled');
      expect(result.payload).toEqual(favorites);
      expect((result.payload as Offer[])[0].isFavorite).toBe(true);
      expect(store.getState().favorites.favorites).toEqual(favorites);
    });

    it('должен вернуть пустой массив если избранных нет', async () => {
      const store = createTestStore();
      mockAPI.onGet(APIRoute.Favorite).reply(200, []);

      const result = await store.dispatch(fetchFavorites());

      expect(result.type).toBe('data/fetchFavorites/fulfilled');
      expect(result.payload).toEqual([]);
      expect(store.getState().favorites.favorites).toEqual([]);
    });

    it('должен установить hasFavoritesError для неавторизованного пользователя', async () => {
      const store = createTestStore();
      mockAPI.onGet(APIRoute.Favorite).reply(401);

      const result = await store.dispatch(fetchFavorites());

      expect(result.type).toBe('data/fetchFavorites/rejected');
      expect(store.getState().favorites.hasFavoritesError).toBe(true);
    });
  });

  describe('checkAuth', () => {
    it('должен вернуть данные пользователя при валидном токене', async () => {
      const store = createTestStore();
      mockAPI.onGet(APIRoute.Login).reply(200, mockUser);

      const result = await store.dispatch(checkAuth());

      expect(result.type).toBe('user/checkAuth/fulfilled');
      expect(result.payload).toEqual(mockUser);
      expect(store.getState().user.user).toEqual(mockUser);
      expect(store.getState().user.authorizationStatus).toBe('AUTH');
    });

    it('должен установить NoAuth статус при отсутствии токена', async () => {
      const store = createTestStore();
      mockAPI.onGet(APIRoute.Login).reply(401);

      const result = await store.dispatch(checkAuth());

      expect(result.type).toBe('user/checkAuth/rejected');
      expect(store.getState().user.authorizationStatus).toBe('NO_AUTH');
    });
  });
});
