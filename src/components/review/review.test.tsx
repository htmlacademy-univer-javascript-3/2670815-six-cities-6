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

  const mockProReview: ReviewType = {
    ...mockReview,
    id: '2',
    user: {
      ...mockReview.user,
      isPro: true,
    },
  };

  it('должен корректно отрисоваться', () => {
    render(<Review review={mockReview} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Great place to stay! Highly recommended.')).toBeInTheDocument();
  });

  it('должен отображать аватар пользователя', () => {
    render(<Review review={mockReview} />);

    const avatar = screen.getByAltText('Reviews avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(avatar).toHaveAttribute('width', '54');
    expect(avatar).toHaveAttribute('height', '54');
  });

  it('должен отображать рейтинг', () => {
    const { container } = render(<Review review={mockReview} />);

    const ratingStars = container.querySelector('.reviews__stars');
    expect(ratingStars).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });

  it('должен форматировать дату в правильном формате', () => {
    render(<Review review={mockReview} />);

    expect(screen.getByText('December 2024')).toBeInTheDocument();
  });

  it('должен добавлять класс pro для профессиональных пользователей', () => {
    const { container } = render(<Review review={mockProReview} />);

    const userElement = container.querySelector('.reviews__user');
    expect(userElement).toHaveClass('user--pro');
  });

  it('не должен добавлять класс pro для обычных пользователей', () => {
    const { container } = render(<Review review={mockReview} />);

    const userElement = container.querySelector('.reviews__user');
    expect(userElement).not.toHaveClass('user--pro');
  });

  it('должен иметь правильный элемент time с dateTime атрибутом', () => {
    render(<Review review={mockReview} />);

    const timeElement = screen.getByText('December 2024');
    expect(timeElement.tagName).toBe('TIME');
    expect(timeElement).toHaveAttribute('dateTime', '2024-12-10T10:00:00.000Z');
  });

  it('должен отображать весь текст комментария', () => {
    const longComment = 'A'.repeat(300);
    const reviewWithLongComment = { ...mockReview, comment: longComment };

    render(<Review review={reviewWithLongComment} />);

    expect(screen.getByText(longComment)).toBeInTheDocument();
  });
});
