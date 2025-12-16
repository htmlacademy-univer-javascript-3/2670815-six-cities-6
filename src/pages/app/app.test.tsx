import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import offersReducer from '../../store/slices/offers-slice';
import userReducer from '../../store/slices/user-slice';
import commentsReducer from '../../store/slices/comments-slice';
import favoritesReducer from '../../store/slices/favorites-slice';
import { AuthorizationStatus } from '../../types/auth';
import PrivateRoute from '../private-route/private-route';

// Мокаем компоненты страниц
vi.mock('../main-screen/main-screen', () => ({
  default: () => <div data-testid="main-screen">Main Screen</div>,
}));

vi.mock('../login-screen/login-screen', () => ({
  default: () => <div data-testid="login-screen">Login Screen</div>,
}));

vi.mock('../favorites-screen/favorites-screen', () => ({
  default: () => <div data-testid="favorites-screen">Favorites Screen</div>,
}));

vi.mock('../offer-screen/offer-screen', () => ({
  default: () => <div data-testid="offer-screen">Offer Screen</div>,
}));

vi.mock('../not-found-screen/not-found-screen', () => ({
  default: () => <div data-testid="not-found-screen">Not Found Screen</div>,
}));

// Импортируем замокированные компоненты
const MainScreen = vi.mocked((await import('../main-screen/main-screen')).default);
const LoginScreen = vi.mocked((await import('../login-screen/login-screen')).default);
const FavoritesScreen = vi.mocked((await import('../favorites-screen/favorites-screen')).default);
const OfferScreen = vi.mocked((await import('../offer-screen/offer-screen')).default);
const NotFoundScreen = vi.mocked((await import('../not-found-screen/not-found-screen')).default);

describe('App Routing', () => {
  const createTestStore = (authStatus = AuthorizationStatus.NoAuth) =>
    configureStore({
      reducer: {
        offers: offersReducer,
        user: userReducer,
        comments: commentsReducer,
        favorites: favoritesReducer,
      },
      preloadedState: {
        user: {
          authorizationStatus: authStatus,
          user: null,
        },
        offers: {
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
        },
        comments: {
          comments: [],
          isCommentsLoading: false,
          hasCommentsError: false,
          isCommentPosting: false,
        },
        favorites: {
          favorites: [],
          isFavoritesLoading: false,
          hasFavoritesError: false,
        },
      },
    });

  const renderWithRouter = (initialRoute: string, authStatus = AuthorizationStatus.NoAuth) => {
    const store = createTestStore(authStatus);

    return render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialRoute]}>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route
              path="/favorites"
              element={
                <PrivateRoute>
                  <FavoritesScreen />
                </PrivateRoute>
              }
            />
            <Route path="/offer/:id" element={<OfferScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  };

  it('должен отрисовать главную страницу для маршрута "/"', () => {
    renderWithRouter('/');
    expect(screen.getByTestId('main-screen')).toBeInTheDocument();
  });

  it('должен отрисовать страницу логина для маршрута "/login"', () => {
    renderWithRouter('/login');
    expect(screen.getByTestId('login-screen')).toBeInTheDocument();
  });

  it('должен отрисовать страницу предложения для маршрута "/offer/:id"', () => {
    renderWithRouter('/offer/123');
    expect(screen.getByTestId('offer-screen')).toBeInTheDocument();
  });

  it('должен отрисовать страницу 404 для несуществующего маршрута', () => {
    renderWithRouter('/non-existent-route');
    expect(screen.getByTestId('not-found-screen')).toBeInTheDocument();
  });

  it('должен перенаправить на /login для /favorites когда пользователь не авторизован', () => {
    renderWithRouter('/favorites', AuthorizationStatus.NoAuth);
    expect(screen.getByTestId('login-screen')).toBeInTheDocument();
    expect(screen.queryByTestId('favorites-screen')).not.toBeInTheDocument();
  });

  it('должен отрисовать страницу избранного для /favorites когда пользователь авторизован', () => {
    renderWithRouter('/favorites', AuthorizationStatus.Auth);
    expect(screen.getByTestId('favorites-screen')).toBeInTheDocument();
    expect(screen.queryByTestId('login-screen')).not.toBeInTheDocument();
  });

  it('должен корректно обрабатывать разные ID предложений', () => {
    renderWithRouter('/offer/1');
    expect(screen.getByTestId('offer-screen')).toBeInTheDocument();
  });

  it('должен отрисовать 404 для неправильно сформированных маршрутов', () => {
    renderWithRouter('/some/random/path');
    expect(screen.getByTestId('not-found-screen')).toBeInTheDocument();
  });
});
