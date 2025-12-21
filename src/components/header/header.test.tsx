import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';
import userReducer from '../../store/slices/user-slice';
import { AuthorizationStatus, type UserData } from '../../types/auth';

describe('Header', () => {
  const createTestStore = (authStatus: AuthorizationStatus, user: UserData | null = null) =>
    configureStore({
      reducer: {
        user: userReducer,
      },
      preloadedState: {
        user: {
          authorizationStatus: authStatus,
          user,
        },
      },
    });

  const renderWithProviders = (component: React.ReactNode, store: ReturnType<typeof createTestStore>) =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          {component}
        </MemoryRouter>
      </Provider>
    );

  it('должен отрисовать логотип', () => {
    const store = createTestStore(AuthorizationStatus.NoAuth);
    renderWithProviders(<Header />, store);

    const logo = screen.getByAltText('6 cities logo');
    expect(logo).toBeInTheDocument();
  });

  it('должен отрисовать кнопку Sign in когда пользователь не авторизован', () => {
    const store = createTestStore(AuthorizationStatus.NoAuth);
    renderWithProviders(<Header />, store);

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('должен отрисовать элементы профиля когда пользователь авторизован', () => {
    const mockUser: UserData = {
      email: 'test@example.com',
      avatarUrl: 'avatar.jpg',
      name: 'Test User',
      isPro: false,
      token: 'test-token',
    };

    const store = createTestStore(AuthorizationStatus.Auth, mockUser);
    renderWithProviders(<Header />, store);

    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  // Тесты взаимодействия
  it('должен вызвать logout при клике на Sign out', async () => {
    const user = userEvent.setup();
    const mockUser: UserData = {
      email: 'test@example.com',
      avatarUrl: 'avatar.jpg',
      name: 'Test User',
      isPro: false,
      token: 'test-token',
    };

    const store = createTestStore(AuthorizationStatus.Auth, mockUser);
    const dispatchSpy = vi.spyOn(store, 'dispatch');

    renderWithProviders(<Header />, store);

    const signOutButton = screen.getByText('Sign out');
    await user.click(signOutButton);

    expect(dispatchSpy).toHaveBeenCalled();
  });
});
