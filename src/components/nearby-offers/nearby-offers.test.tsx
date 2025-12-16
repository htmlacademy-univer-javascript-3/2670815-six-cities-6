import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import NearbyOffers from './nearby-offers';
import type { Offer } from '../../types/offer';

// Мокаем OffersList, так как это сложный компонент
vi.mock('../../pages/offers-list/offers-list', () => ({
  default: ({ offers, className, imageWidth, imageHeight }: {
    offers: Offer[];
    className?: string;
    imageWidth?: number;
    imageHeight?: number;
  }) => (
    <div data-testid="offers-list">
      <div data-testid="className">{className}</div>
      <div data-testid="imageWidth">{imageWidth}</div>
      <div data-testid="imageHeight">{imageHeight}</div>
      <div data-testid="offers-count">{offers.length}</div>
    </div>
  ),
}));

describe('NearbyOffers', () => {
  const mockOffers: Offer[] = [
    {
      id: '1',
      title: 'Test Offer 1',
      type: 'apartment',
      price: 100,
      previewImage: 'img1.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13,
        },
      },
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 16,
      },
      isFavorite: false,
      isPremium: false,
      rating: 4.5,
    },
    {
      id: '2',
      title: 'Test Offer 2',
      type: 'room',
      price: 80,
      previewImage: 'img2.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13,
        },
      },
      location: {
        latitude: 52.3809553943508,
        longitude: 4.84309666406198,
        zoom: 16,
      },
      isFavorite: true,
      isPremium: true,
      rating: 4.8,
    },
  ];

  it('должен корректно отрисоваться', () => {
    const { getByTestId } = render(<NearbyOffers offers={mockOffers} />);

    expect(getByTestId('offers-list')).toBeInTheDocument();
  });

  it('должен передать правильный className в OffersList', () => {
    const { getByTestId } = render(<NearbyOffers offers={mockOffers} />);

    expect(getByTestId('className')).toHaveTextContent('near-places__list places__list');
  });

  it('должен передать правильный imageWidth в OffersList', () => {
    const { getByTestId } = render(<NearbyOffers offers={mockOffers} />);

    expect(getByTestId('imageWidth')).toHaveTextContent('260');
  });

  it('должен передать правильный imageHeight в OffersList', () => {
    const { getByTestId } = render(<NearbyOffers offers={mockOffers} />);

    expect(getByTestId('imageHeight')).toHaveTextContent('200');
  });

  it('должен передать массив offers в OffersList', () => {
    const { getByTestId } = render(<NearbyOffers offers={mockOffers} />);

    expect(getByTestId('offers-count')).toHaveTextContent('2');
  });

  it('должен работать с пустым массивом предложений', () => {
    const { getByTestId } = render(<NearbyOffers offers={[]} />);

    expect(getByTestId('offers-count')).toHaveTextContent('0');
  });
});
