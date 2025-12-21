import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Map from './map';
import * as useMapHook from '../../hooks/use-map';

// Мокаем useMap hook
vi.mock('../../hooks/use-map', () => ({
  default: vi.fn(),
}));

describe('Map', () => {
  const mockCity = {
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 12,
    },
  };

  const mockPoints = [
    {
      id: '1',
      title: 'Offer 1',
      lat: 48.8566,
      lng: 2.3522,
    },
    {
      id: '2',
      title: 'Offer 2',
      lat: 48.8577,
      lng: 2.3533,
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('должен отрисовать контейнер карты', () => {
    vi.mocked(useMapHook.default).mockReturnValue(null);

    const { container } = render(
      <Map
        city={mockCity}
        points={mockPoints}
        selectedPoint={undefined}
      />
    );

    const mapContainer = container.querySelector('.cities__map');
    expect(mapContainer).toBeInTheDocument();
    expect(mapContainer).toHaveStyle('height: 100%');
  });

  it('должен вызвать useMap hook с правильными параметрами', () => {
    vi.mocked(useMapHook.default).mockReturnValue(null);

    const { container } = render(
      <Map
        city={mockCity}
        points={mockPoints}
        selectedPoint={undefined}
      />
    );

    const mapContainer = container.querySelector('.cities__map');
    expect(useMapHook.default).toHaveBeenCalledWith(
      expect.objectContaining({ current: mapContainer }),
      mockCity
    );
  });

  it('должен корректно обрабатывать отсутствие карты', () => {
    vi.mocked(useMapHook.default).mockReturnValue(null);

    const { container } = render(
      <Map
        city={mockCity}
        points={mockPoints}
        selectedPoint={undefined}
      />
    );

    const mapContainer = container.querySelector('.cities__map');
    expect(mapContainer).toBeInTheDocument();
  });
});