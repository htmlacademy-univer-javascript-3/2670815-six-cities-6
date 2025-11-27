import type { Meta, StoryObj } from '@storybook/react-vite';
import ReviewsList from '../reviews-list';
import type { ReviewType } from '../types';

const meta = {
  title: 'Components/ReviewsList',
  component: ReviewsList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockReviews: ReviewType[] = [
  {
    id: '1',
    date: '2024-10-15T12:00:00.000Z',
    user: {
      name: 'Max',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: false,
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: '2',
    date: '2024-11-01T15:30:00.000Z',
    user: {
      name: 'Sarah Johnson',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: true,
    },
    comment: 'Excellent location! The apartment was clean, modern, and well-equipped. The host was very responsive and helpful.',
    rating: 5,
  },
  {
    id: '3',
    date: '2024-09-20T09:15:00.000Z',
    user: {
      name: 'John Doe',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: false,
    },
    comment: 'The location was good but the apartment needs some renovation.',
    rating: 2,
  },
];

export const Default: Story = {
  args: {
    reviews: mockReviews,
  },
};

export const SingleReview: Story = {
  args: {
    reviews: [mockReviews[0]],
  },
};

export const Empty: Story = {
  args: {
    reviews: [],
  },
};

export const WithForm: Story = {
  args: {
    reviews: mockReviews,
    children: (
      <div style={{ padding: '20px', background: '#f0f0f0', borderRadius: '4px' }}>
        Review form would be here
      </div>
    ),
  },
};
