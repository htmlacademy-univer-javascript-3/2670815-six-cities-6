import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
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
    expect(container.querySelector('.locations__list')).toBeInTheDocument();
  });

  it('должен отобразить все города', () => {
    render(
      <CitiesList
        cities={mockCities}
        currentCity="Paris"
        onCityChange={mockOnCityChange}
      />
    );

    mockCities.forEach((city) => {
      expect(screen.getByText(city)).toBeInTheDocument();
    });
  });

  it('должен отметить текущий город как активный', () => {
    const { container } = render(
      <CitiesList
        cities={mockCities}
        currentCity="Amsterdam"
        onCityChange={mockOnCityChange}
      />
    );

    const buttons = container.querySelectorAll('.locations__item-link');
    const activeButton = Array.from(buttons).find((button) =>
      button.classList.contains('tabs__item--active')
    );

    expect(activeButton).toBeInTheDocument();
    expect(activeButton).toHaveTextContent('Amsterdam');
  });

  it('не должен отмечать неактивные города', () => {
    const { container } = render(
      <CitiesList
        cities={mockCities}
        currentCity="Paris"
        onCityChange={mockOnCityChange}
      />
    );

    const buttons = container.querySelectorAll('.locations__item-link');
    const inactiveButtons = Array.from(buttons).filter((button) =>
      !button.classList.contains('tabs__item--active')
    );

    expect(inactiveButtons).toHaveLength(mockCities.length - 1);
  });

  it('должен отрисовать кнопки для всех городов', () => {
    const { container } = render(
      <CitiesList
        cities={mockCities}
        currentCity="Paris"
        onCityChange={mockOnCityChange}
      />
    );

    const buttons = container.querySelectorAll('button.locations__item-link');
    expect(buttons).toHaveLength(mockCities.length);
  });

  it('все кнопки должны иметь тип button', () => {
    const { container } = render(
      <CitiesList
        cities={mockCities}
        currentCity="Paris"
        onCityChange={mockOnCityChange}
      />
    );

    const buttons = container.querySelectorAll('button.locations__item-link');
    buttons.forEach((button) => {
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  it('должен корректно работать с одним городом', () => {
    render(
      <CitiesList
        cities={['Paris']}
        currentCity="Paris"
        onCityChange={mockOnCityChange}
      />
    );

    expect(screen.getByText('Paris')).toBeInTheDocument();
  });

  it('должен иметь правильную структуру классов', () => {
    const { container } = render(
      <CitiesList
        cities={mockCities}
        currentCity="Paris"
        onCityChange={mockOnCityChange}
      />
    );

    expect(container.querySelector('.locations.container')).toBeInTheDocument();
    expect(container.querySelector('.locations__list.tabs__list')).toBeInTheDocument();
    expect(container.querySelector('.locations__item')).toBeInTheDocument();
  });

  it('должен отрисовать правильное количество элементов списка', () => {
    const { container } = render(
      <CitiesList
        cities={mockCities}
        currentCity="Paris"
        onCityChange={mockOnCityChange}
      />
    );

    const listItems = container.querySelectorAll('.locations__item');
    expect(listItems).toHaveLength(mockCities.length);
  });
});
