import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Review from './review';
import type { ReviewType } from './types';

describe('Review', () => {
  const mockReview: ReviewType = {
    id: '1',
    date: '2024-12-10T10:00:00.000Z',
    user: {
      name: 'John Doe',
      avatarUrl: 'https://example.com/avatar.jpg',
      isPro: false,
    },
    comment: 'Great place to stay! Highly recommended.',
    rating: 4.5,
  };

  it('должен корректно отрисоваться', () => {
    render(<Review review={mockReview} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Great place to stay! Highly recommended.')).toBeInTheDocument();
  });

  it('должен отображать дату', () => {
    render(<Review review={mockReview} />);

    expect(screen.getByText('December 2024')).toBeInTheDocument();
  });
});
