import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Spinner from './spinner';

describe('Spinner', () => {
  it('должен корректно отрисоваться', () => {
    const { container } = render(<Spinner />);

    expect(container.querySelector('.spinner')).toBeInTheDocument();
    expect(container.querySelector('.spinner__circle')).toBeInTheDocument();
  });

  it('должен иметь правильную структуру', () => {
    const { container } = render(<Spinner />);

    const spinner = container.querySelector('.spinner');
    const circle = container.querySelector('.spinner__circle');

    expect(spinner).toContainElement(circle);
  });
});
