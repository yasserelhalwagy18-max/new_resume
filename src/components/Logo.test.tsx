import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Logo } from './Logo';

// Mock motion/react to prevent "unrecognized prop" warnings and render standard HTML tags
vi.mock('motion/react', () => ({
  motion: {
    div: ({ initial, animate, whileHover, variants, transition, ...props }: any) => <div data-testid="motion-div" {...props} />,
    path: ({ initial, animate, whileHover, variants, transition, ...props }: any) => <path data-testid="motion-path" {...props} />
  }
}));

describe('Logo', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Logo />);
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg?.getAttribute('aria-label')).toBe('Sadegh Shahid Logo');
    expect(svg?.getAttribute('class')).toBe('w-8 h-8');
  });

  it('applies custom className', () => {
    const { container } = render(<Logo className="custom-class" />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('class')).toBe('custom-class');
  });

  it('changes stroke properties when isDrawing=true', () => {
    const { container } = render(<Logo isDrawing={true} />);
    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(2);

    // Test strokeWidth attribute mapping React strokeWidth to DOM stroke-width
    expect(paths[0].getAttribute('stroke-width')).toBe('2');
    expect(paths[1].getAttribute('stroke-width')).toBe('2');
    expect(paths[0].getAttribute('stroke-opacity')).toBe('1');
  });

  it('changes stroke properties when isDrawing=false', () => {
    const { container } = render(<Logo isDrawing={false} />);
    const paths = container.querySelectorAll('path');
    expect(paths.length).toBe(2);

    expect(paths[0].getAttribute('stroke-width')).toBe('3');
    expect(paths[1].getAttribute('stroke-width')).toBe('3');
    expect(paths[0].getAttribute('stroke-opacity')).toBe('0.6');
  });
});
