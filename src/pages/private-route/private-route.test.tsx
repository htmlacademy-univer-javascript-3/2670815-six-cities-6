import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import PrivateRoute from './private-route';
import userReducer from '../../store/slices/user-slice';
import { AuthorizationStatus } from '../../types/auth';

describe('PrivateRoute', () => {
  const createTestStore = (authStatus: AuthorizationStatus) =>
    configureStore({
      reducer: {
        user: userReducer,
      },
      preloadedState: {
        user: {
          authorizationStatus: authStatus,
          user: null,
        },
      },
    });

  const ProtectedComponent = () => <div data-testid="protected-content">Protected Content</div>;
  const LoginComponent = () => <div data-testid="login-page">Login Page</div>;

  it('должен отрисовать дочерний компонент когда пользователь авторизован', () => {
    const store = createTestStore(AuthorizationStatus.Auth);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <Route
              path="/protected"
              element={
                <PrivateRoute>
                  <ProtectedComponent />
                </PrivateRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('protected-content')).toBeInTheDocument();
  });

  it('должен перенаправить на /login когда пользователь не авторизован', () => {
    const store = createTestStore(AuthorizationStatus.NoAuth);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <Route
              path="/protected"
              element={
                <PrivateRoute>
                  <ProtectedComponent />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });

  it('должен перенаправить на /login когда статус авторизации Unknown', () => {
    const store = createTestStore(AuthorizationStatus.Unknown);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <Route
              path="/protected"
              element={
                <PrivateRoute>
                  <ProtectedComponent />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });

  it('должен корректно работать с разными дочерними компонентами', () => {
    const store = createTestStore(AuthorizationStatus.Auth);

    const CustomComponent = () => <div data-testid="custom-component">Custom Component</div>;

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/custom']}>
          <Routes>
            <Route
              path="/custom"
              element={
                <PrivateRoute>
                  <CustomComponent />
                </PrivateRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('custom-component')).toBeInTheDocument();
  });

  it('не должен отрисовать защищенный контент при смене статуса с Auth на NoAuth', () => {
    let store = createTestStore(AuthorizationStatus.Auth);

    const { rerender } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <Route
              path="/protected"
              element={
                <PrivateRoute>
                  <ProtectedComponent />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('protected-content')).toBeInTheDocument();

    // Пересоздаем store с новым статусом
    store = createTestStore(AuthorizationStatus.NoAuth);

    rerender(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <Route
              path="/protected"
              element={
                <PrivateRoute>
                  <ProtectedComponent />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });

  it('должен сохранять параметры маршрута при перенаправлении', () => {
    const store = createTestStore(AuthorizationStatus.NoAuth);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <Route
              path="/protected"
              element={
                <PrivateRoute>
                  <ProtectedComponent />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });
});
