import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ReviewsList from './reviews-list';
import type { Comment } from '../../types/comment';

describe('ReviewsList', () => {
  const mockReviews: Comment[] = [
    {
      id: '1',
      date: '2024-12-10T10:00:00.000Z',
      user: {
        name: 'John Doe',
        avatarUrl: 'https://example.com/avatar1.jpg',
        isPro: false,
      },
      comment: 'Great place!',
      rating: 5,
    },
    {
      id: '2',
      date: '2024-12-11T10:00:00.000Z',
      user: {
        name: 'Jane Smith',
        avatarUrl: 'https://example.com/avatar2.jpg',
        isPro: true,
      },
      comment: 'Nice location.',
      rating: 4,
    },
  ];

  it('должен корректно отрисоваться', () => {
    const { container } = render(<ReviewsList reviews={mockReviews} />);

    expect(container.querySelector('.offer__reviews')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('должен отображать все отзывы', () => {
    render(<ReviewsList reviews={mockReviews} />);

    expect(screen.getByText('Great place!')).toBeInTheDocument();
    expect(screen.getByText('Nice location.')).toBeInTheDocument();
  });
});
