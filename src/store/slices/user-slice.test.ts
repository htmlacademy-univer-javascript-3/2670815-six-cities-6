import { describe, it, expect } from 'vitest';
import userReducer, { setAuthorizationStatus } from './user-slice';
import { checkAuth, login, logout } from '../action';
import { AuthorizationStatus, UserData } from '../../types/auth';

describe('userSlice', () => {
  const initialState = {
    authorizationStatus: AuthorizationStatus.Unknown,
    user: null,
  };

  const mockUser: UserData = {
    name: 'Test User',
    avatarUrl: 'avatar.jpg',
    isPro: false,
    email: 'test@test.com',
    token: 'test-token',
  };

  it('должен вернуть начальное состояние при неизвестном действии', () => {
    expect(userReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(initialState);
  });

  describe('синхронные действия', () => {
    it('должен изменить статус авторизации', () => {
      const state = userReducer(initialState, setAuthorizationStatus(AuthorizationStatus.Auth));
      expect(state.authorizationStatus).toBe(AuthorizationStatus.Auth);
    });

    it('должен изменить статус на NoAuth', () => {
      const state = userReducer(initialState, setAuthorizationStatus(AuthorizationStatus.NoAuth));
      expect(state.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
    });
  });

  describe('checkAuth', () => {
    it('должен установить Auth статус и данные пользователя при fulfilled', () => {
      const state = userReducer(initialState, checkAuth.fulfilled(mockUser, '', undefined));
      expect(state.authorizationStatus).toBe(AuthorizationStatus.Auth);
      expect(state.user).toEqual(mockUser);
    });

    it('должен установить NoAuth статус при rejected', () => {
      const state = userReducer(initialState, checkAuth.rejected(null, '', undefined));
      expect(state.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
      expect(state.user).toBeNull();
    });
  });

  describe('login', () => {
    const authData = { login: 'test@test.com', password: 'password123' };

    it('должен установить Auth статус и данные пользователя при fulfilled', () => {
      const state = userReducer(initialState, login.fulfilled(mockUser, '', authData));
      expect(state.authorizationStatus).toBe(AuthorizationStatus.Auth);
      expect(state.user).toEqual(mockUser);
    });

    it('должен установить NoAuth статус при rejected', () => {
      const state = userReducer(initialState, login.rejected(null, '', authData));
      expect(state.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
      expect(state.user).toBeNull();
    });

    it('должен сохранить Auth статус при повторном логине', () => {
      const stateWithUser = {
        authorizationStatus: AuthorizationStatus.Auth,
        user: mockUser,
      };
      const newUser = { ...mockUser, name: 'New User' };
      const state = userReducer(stateWithUser, login.fulfilled(newUser, '', authData));
      expect(state.authorizationStatus).toBe(AuthorizationStatus.Auth);
      expect(state.user).toEqual(newUser);
    });
  });

  describe('logout', () => {
    it('должен очистить данные пользователя и установить NoAuth при fulfilled', () => {
      const stateWithUser = {
        authorizationStatus: AuthorizationStatus.Auth,
        user: mockUser,
      };
      const state = userReducer(stateWithUser, logout.fulfilled(undefined, '', undefined));
      expect(state.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
      expect(state.user).toBeNull();
    });

    it('должен работать корректно с начальным состоянием', () => {
      const state = userReducer(initialState, logout.fulfilled(undefined, '', undefined));
      expect(state.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
      expect(state.user).toBeNull();
    });
  });
});
