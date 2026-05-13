import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useScrollVelocity } from './useScrollVelocity';
import * as motion from 'motion/react';

vi.mock('motion/react', () => ({
  useScroll: vi.fn(() => ({ scrollY: 'mock-scrollY' })),
  useVelocity: vi.fn((val) => `mock-velocity-${val}`),
  useSpring: vi.fn((val, config) => ({ val, config })),
  useTransform: vi.fn((val, fn) => ({ source: val, fn })),
}));

describe('useScrollVelocity', () => {
  it('sets up the motion hooks correctly', () => {
    const { result } = renderHook(() => useScrollVelocity());

    expect(motion.useScroll).toHaveBeenCalled();
    expect(motion.useVelocity).toHaveBeenCalledWith('mock-scrollY');
    expect(motion.useSpring).toHaveBeenCalledWith('mock-velocity-mock-scrollY', {
      stiffness: 150,
      damping: 15,
    });

    expect((result.current as any).source).toBeDefined();
    expect((result.current as any).fn).toBeDefined();
  });

  it('calculates the correct skew values without hitting the clamp limit', () => {
    const { result } = renderHook(() => useScrollVelocity(2));
    const transformFn = (result.current as any).fn;

    expect(transformFn(1000)).toBe(0.5);
    expect(transformFn(-1000)).toBe(-0.5);
    expect(transformFn(0)).toBe(0);
  });

  it('clamps the positive skew value correctly', () => {
    const { result } = renderHook(() => useScrollVelocity(1));
    const transformFn = (result.current as any).fn;

    expect(transformFn(4000)).toBe(1);
  });

  it('clamps the negative skew value correctly', () => {
    const { result } = renderHook(() => useScrollVelocity(1));
    const transformFn = (result.current as any).fn;

    expect(transformFn(-4000)).toBe(-1);
  });

  it('uses default clamp value of 2', () => {
    const { result } = renderHook(() => useScrollVelocity());
    const transformFn = (result.current as any).fn;

    expect(transformFn(6000)).toBe(2);
    expect(transformFn(-6000)).toBe(-2);
  });
});
