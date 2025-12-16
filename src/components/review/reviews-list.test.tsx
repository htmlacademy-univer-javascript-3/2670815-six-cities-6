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
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it('должен отображать правильное количество отзывов в заголовке', () => {
    render(<ReviewsList reviews={mockReviews} />);

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('должен отображать все отзывы', () => {
    render(<ReviewsList reviews={mockReviews} />);

    expect(screen.getByText('Great place!')).toBeInTheDocument();
    expect(screen.getByText('Nice location.')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('должен отображать 0 отзывов для пустого массива', () => {
    render(<ReviewsList reviews={[]} />);

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('должен отрисовывать список отзывов с правильными ключами', () => {
    const { container } = render(<ReviewsList reviews={mockReviews} />);

    const reviewsList = container.querySelector('.reviews__list');
    const reviewItems = reviewsList?.querySelectorAll('.reviews__item');

    expect(reviewItems).toHaveLength(2);
  });

  it('должен отрисовывать children если они переданы', () => {
    render(
      <ReviewsList reviews={mockReviews}>
        <div data-testid="custom-child">Custom Content</div>
      </ReviewsList>
    );

    expect(screen.getByTestId('custom-child')).toBeInTheDocument();
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });

  it('не должен ломаться если children не переданы', () => {
    const { container } = render(<ReviewsList reviews={mockReviews} />);

    expect(container.querySelector('.offer__reviews')).toBeInTheDocument();
  });

  it('должен иметь правильную структуру классов', () => {
    const { container } = render(<ReviewsList reviews={mockReviews} />);

    expect(container.querySelector('.offer__reviews.reviews')).toBeInTheDocument();
    expect(container.querySelector('.reviews__title')).toBeInTheDocument();
    expect(container.querySelector('.reviews__amount')).toBeInTheDocument();
    expect(container.querySelector('.reviews__list')).toBeInTheDocument();
  });
});
