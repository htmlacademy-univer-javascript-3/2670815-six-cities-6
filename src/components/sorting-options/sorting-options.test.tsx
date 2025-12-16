import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SortingOptions from './sorting-options';
import type { SortingOption } from './types';
import { SORTING_OPTIONS } from './constants';

describe('SortingOptions', () => {
  const mockOnSortingChange = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('должен корректно отрисоваться', () => {
    const { container } = render(
      <SortingOptions
        currentSorting="Popular"
        onSortingChange={mockOnSortingChange}
      />
    );

    expect(container.querySelector('.places__sorting')).toBeInTheDocument();
    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });

  it('должен отображать текущий выбранный тип сортировки', () => {
    const { container } = render(
      <SortingOptions
        currentSorting="Price: low to high"
        onSortingChange={mockOnSortingChange}
      />
    );

    const sortingType = container.querySelector('.places__sorting-type');
    expect(sortingType).toHaveTextContent('Price: low to high');
  });

  it('должен отображать все варианты сортировки', () => {
    render(
      <SortingOptions
        currentSorting="Popular"
        onSortingChange={mockOnSortingChange}
      />
    );

    SORTING_OPTIONS.forEach((option) => {
      const elements = screen.getAllByText(option);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('должен отметить текущий вариант как активный', () => {
    const { container } = render(
      <SortingOptions
        currentSorting="Top rated first"
        onSortingChange={mockOnSortingChange}
      />
    );

    const options = container.querySelectorAll('.places__option');
    const activeOption = Array.from(options).find((option) =>
      option.classList.contains('places__option--active')
    );

    expect(activeOption).toBeInTheDocument();
    expect(activeOption).toHaveTextContent('Top rated first');
  });

  it('должен иметь иконку стрелки', () => {
    const { container } = render(
      <SortingOptions
        currentSorting="Popular"
        onSortingChange={mockOnSortingChange}
      />
    );

    const arrow = container.querySelector('.places__sorting-arrow');
    expect(arrow).toBeInTheDocument();

    const use = arrow?.querySelector('use');
    expect(use).toBeInTheDocument();
  });

  it('список опций должен быть изначально закрыт', () => {
    const { container } = render(
      <SortingOptions
        currentSorting="Popular"
        onSortingChange={mockOnSortingChange}
      />
    );

    const optionsList = container.querySelector('.places__options');
    expect(optionsList).not.toHaveClass('places__options--opened');
  });

  it('должен отрисовать form элемент', () => {
    const { container } = render(
      <SortingOptions
        currentSorting="Popular"
        onSortingChange={mockOnSortingChange}
      />
    );

    const form = container.querySelector('form.places__sorting');
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute('action', '#');
    expect(form).toHaveAttribute('method', 'get');
  });

  it('все опции сортировки должны иметь правильный класс', () => {
    const { container } = render(
      <SortingOptions
        currentSorting="Popular"
        onSortingChange={mockOnSortingChange}
      />
    );

    const options = container.querySelectorAll('.places__option');
    expect(options).toHaveLength(SORTING_OPTIONS.length);
  });

  it('текущий тип сортировки должен быть кликабельным', () => {
    const { container } = render(
      <SortingOptions
        currentSorting="Popular"
        onSortingChange={mockOnSortingChange}
      />
    );

    const sortingType = container.querySelector('.places__sorting-type');
    expect(sortingType).toBeInTheDocument();
    expect(sortingType).toHaveAttribute('tabIndex', '0');
  });

  it('все опции должны иметь tabIndex для доступности', () => {
    const { container } = render(
      <SortingOptions
        currentSorting="Popular"
        onSortingChange={mockOnSortingChange}
      />
    );

    const options = container.querySelectorAll('.places__option');
    options.forEach((option) => {
      expect(option).toHaveAttribute('tabIndex', '0');
    });
  });

  it('должен работать с разными типами сортировки', () => {
    const sortingTypes: SortingOption[] = [
      'Popular',
      'Price: low to high',
      'Price: high to low',
      'Top rated first',
    ];

    sortingTypes.forEach((type) => {
      const { container } = render(
        <SortingOptions
          currentSorting={type}
          onSortingChange={mockOnSortingChange}
        />
      );

      const activeOption = container.querySelector('.places__option--active');
      expect(activeOption).toHaveTextContent(type);
    });
  });
});
