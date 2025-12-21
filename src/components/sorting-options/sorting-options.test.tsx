import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SortingOptions from './sorting-options';

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

  // Тесты взаимодействия
  it('должен открыть список опций при клике', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <SortingOptions
        currentSorting="Popular"
        onSortingChange={mockOnSortingChange}
      />
    );

    const sortingType = container.querySelector('.places__sorting-type');
    await user.click(sortingType as HTMLElement);

    const optionsList = container.querySelector('.places__options');
    expect(optionsList).toHaveClass('places__options--opened');
  });

  it('должен вызвать onSortingChange при выборе опции', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <SortingOptions
        currentSorting="Popular"
        onSortingChange={mockOnSortingChange}
      />
    );

    const sortingType = container.querySelector('.places__sorting-type');
    await user.click(sortingType as HTMLElement);

    const options = container.querySelectorAll('.places__option');
    await user.click(options[1] as HTMLElement);

    expect(mockOnSortingChange).toHaveBeenCalled();
  });
});
