import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useScrollVelocity } from './useScrollVelocity';

// Mock motion/react hooks
vi.mock('motion/react', () => {
  return {
    useScroll: vi.fn(() => ({ scrollY: 'mock-scrollY' })),
    useVelocity: vi.fn((val) => `mock-velocity-${val}`),
    useSpring: vi.fn((val, options) => `mock-spring-${val}`),
    useTransform: vi.fn((val, transformFn) => {
      // Return an object that exposes the internal value and the transform function
      // so we can unit test the logic passed into useTransform.
      return { val, transformFn };
    }),
  };
});

describe('useScrollVelocity', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call motion hooks with correct parameters and chain them', () => {
    const { result } = renderHook(() => useScrollVelocity());

    // Verify the hook chaining
    expect((result.current as any).val).toBe('mock-spring-mock-velocity-mock-scrollY');
  });

  it('should apply the default clamp value of 2', () => {
    const { result } = renderHook(() => useScrollVelocity());
    const transformFn = (result.current as any).transformFn;

    // Value * 0.0005
    expect(transformFn(0)).toBe(0);

    // Within clamp limits
    expect(transformFn(2000)).toBe(1); // 2000 * 0.0005 = 1
    expect(transformFn(-2000)).toBe(-1); // -2000 * 0.0005 = -1

    // Exactly at clamp limits
    expect(transformFn(4000)).toBe(2); // 4000 * 0.0005 = 2
    expect(transformFn(-4000)).toBe(-2); // -4000 * 0.0005 = -2

    // Exceeding clamp limits
    expect(transformFn(6000)).toBe(2); // 6000 * 0.0005 = 3 -> clamped to 2
    expect(transformFn(-6000)).toBe(-2); // -6000 * 0.0005 = -3 -> clamped to -2
  });

  it('should apply a custom clamp value', () => {
    const { result } = renderHook(() => useScrollVelocity(5));
    const transformFn = (result.current as any).transformFn;

    // Within custom clamp limits
    expect(transformFn(8000)).toBe(4); // 8000 * 0.0005 = 4
    expect(transformFn(-8000)).toBe(-4); // -8000 * 0.0005 = -4

    // Exactly at custom clamp limits
    expect(transformFn(10000)).toBe(5); // 10000 * 0.0005 = 5
    expect(transformFn(-10000)).toBe(-5); // -10000 * 0.0005 = -5

    // Exceeding custom clamp limits
    expect(transformFn(12000)).toBe(5); // 12000 * 0.0005 = 6 -> clamped to 5
    expect(transformFn(-12000)).toBe(-5); // -12000 * 0.0005 = -6 -> clamped to -5
  });
});
