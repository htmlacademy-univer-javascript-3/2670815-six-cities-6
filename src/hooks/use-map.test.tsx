import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import useMap from './use-map';
import * as leaflet from 'leaflet';

// Mock leaflet
vi.mock('leaflet', async () => {
  const actual = await vi.importActual('leaflet');
  return {
    ...(actual as any),
    Map: vi.fn().mockImplementation(() => ({
      setView: vi.fn(),
      addLayer: vi.fn(),
      removeLayer: vi.fn(),
    })),
    TileLayer: vi.fn().mockImplementation(() => ({
      addTo: vi.fn(),
    })),
  };
});

describe('useMap', () => {
  const mockCity = {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 13,
    },
  };

  const mockMapRef = {
    current: document.createElement('div'),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('должен создать экземпляр карты при первом вызове', () => {
    const { result } = renderHook(() => useMap(mockMapRef, mockCity));

    expect(result.current).not.toBeNull();
    expect(leaflet.Map).toHaveBeenCalledWith(mockMapRef.current, {
      center: [mockCity.location.latitude, mockCity.location.longitude],
      zoom: mockCity.location.zoom,
    });
  });

  it('должен обновить вид карты при изменении города', () => {
    const { result, rerender } = renderHook(
      ({ mapRef, city }) => useMap(mapRef, city),
      {
        initialProps: { mapRef: mockMapRef, city: mockCity },
      }
    );

    const setViewSpy = vi.spyOn(result.current!, 'setView');

    const newCity = {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 14,
      },
    };

    rerender({ mapRef: mockMapRef, city: newCity });

    expect(setViewSpy).toHaveBeenCalledWith(
      [newCity.location.latitude, newCity.location.longitude],
      newCity.location.zoom
    );
  });

  it('не должен создавать новый экземпляр карты при повторном рендере', () => {
    const { rerender } = renderHook(
      ({ mapRef, city }) => useMap(mapRef, city),
      {
        initialProps: { mapRef: mockMapRef, city: mockCity },
      }
    );

    const mapInstance = leaflet.Map;

    rerender({ mapRef: mockMapRef, city: mockCity });

    expect(mapInstance).toHaveBeenCalledTimes(1);
  });

  it('должен вернуть null если mapRef.current равен null', () => {
    const nullRef = { current: null };
    const { result } = renderHook(() => useMap(nullRef, mockCity));

    expect(result.current).toBeNull();
  });
});