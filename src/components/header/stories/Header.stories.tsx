import type { Meta, StoryObj } from '@storybook/react-vite';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Header from '../header';
import userReducer from '../../../store/slices/user-slice';
import { AuthorizationStatus } from '../../../types/auth';
import type { UserData } from '../../../types/auth';

const mockUser: UserData = {
  name: 'Test User',
  email: 'user@example.com',
  token: 'test-token',
  avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/1.jpg',
  isPro: false,
};

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const store = configureStore({
        reducer: {
          user: userReducer,
        },
      });
      return (
        <Provider store={store}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </Provider>
      );
    },
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotAuthenticated: Story = {
  decorators: [
    (Story) => {
      const store = configureStore({
        reducer: {
          user: userReducer,
        },
        preloadedState: {
          user: {
            authorizationStatus: AuthorizationStatus.NoAuth,
            user: null,
          },
        },
      });
      return (
        <Provider store={store}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </Provider>
      );
    },
  ],
};

export const Authenticated: Story = {
  decorators: [
    (Story) => {
      const store = configureStore({
        reducer: {
          user: userReducer,
        },
        preloadedState: {
          user: {
            authorizationStatus: AuthorizationStatus.Auth,
            user: mockUser,
          },
        },
      });
      return (
        <Provider store={store}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </Provider>
      );
    },
  ],
};

export const MainPageNotAuthenticated: Story = {
  args: {
    isMainPage: true,
  },
  decorators: [
    (Story) => {
      const store = configureStore({
        reducer: {
          user: userReducer,
        },
        preloadedState: {
          user: {
            authorizationStatus: AuthorizationStatus.NoAuth,
            user: null,
          },
        },
      });
      return (
        <Provider store={store}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </Provider>
      );
    },
  ],
};

export const MainPageAuthenticated: Story = {
  args: {
    isMainPage: true,
  },
  decorators: [
    (Story) => {
      const store = configureStore({
        reducer: {
          user: userReducer,
        },
        preloadedState: {
          user: {
            authorizationStatus: AuthorizationStatus.Auth,
            user: mockUser,
          },
        },
      });
      return (
        <Provider store={store}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </Provider>
      );
    },
  ],
};
