import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitiesList from './cities-list';

describe('CitiesList', () => {
  const mockCities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const mockOnCityChange = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('должен корректно отрисоваться', () => {
    const { container } = render(
      <CitiesList
        cities={mockCities}
        currentCity="Paris"
        onCityChange={mockOnCityChange}
      />
    );

    expect(container.querySelector('.locations')).toBeInTheDocument();
    expect(screen.getByText('Paris')).toBeInTheDocument();
  });

  // Тесты взаимодействия
  it('должен вызвать onCityChange при клике на город', async () => {
    const user = userEvent.setup();

    render(
      <CitiesList
        cities={mockCities}
        currentCity="Paris"
        onCityChange={mockOnCityChange}
      />
    );

    await user.click(screen.getByText('Amsterdam'));

    expect(mockOnCityChange).toHaveBeenCalledWith('Amsterdam');
  });
});
