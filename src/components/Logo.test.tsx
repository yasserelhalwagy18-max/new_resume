import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Logo />);

    // Check if the SVG is present
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();

    // Check default class
    expect(svgElement).toHaveClass('w-8 h-8');

    // Check aria-label
    expect(svgElement).toHaveAttribute('aria-label', 'Sadegh Shahid Logo');

    // Check there are two paths rendered
    const paths = container.querySelectorAll('path');
    expect(paths).toHaveLength(2);

    // Check that isDrawing defaults to false by inspecting the stroke-width of the paths
    // The component sets strokeWidth to "2" when isDrawing is true and "3" when false
    expect(paths[0]).toHaveAttribute('stroke-width', '3');
    expect(paths[1]).toHaveAttribute('stroke-width', '3');
  });

  it('applies custom className correctly', () => {
    const { container } = render(<Logo className="w-16 h-16 text-red-500" />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toHaveClass('w-16 h-16 text-red-500');
  });

  it('renders with isDrawing=true correctly', () => {
    const { container } = render(<Logo isDrawing={true} />);

    const paths = container.querySelectorAll('path');
    expect(paths).toHaveLength(2);

    // The component sets strokeWidth to "2" when isDrawing is true
    expect(paths[0]).toHaveAttribute('stroke-width', '2');
    expect(paths[1]).toHaveAttribute('stroke-width', '2');
  });
});
