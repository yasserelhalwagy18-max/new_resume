import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

describe('usePrefersReducedMotion', () => {
  let addEventListenerMock: any;
  let removeEventListenerMock: any;

  beforeEach(() => {
    addEventListenerMock = vi.fn();
    removeEventListenerMock = vi.fn();

    // Mock matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: addEventListenerMock,
        removeEventListener: removeEventListenerMock,
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it('should default to false if not matching', () => {
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);
  });

  it('should be true if matching initially', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: true,
        media: query,
        onchange: null,
        addEventListener: addEventListenerMock,
        removeEventListener: removeEventListenerMock,
        dispatchEvent: vi.fn(),
      })),
    });

    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(true);
  });

  it('should update state when media query changes', () => {
    const { result } = renderHook(() => usePrefersReducedMotion());

    expect(result.current).toBe(false);

    // Simulate change event
    act(() => {
      const changeEvent = new Event('change') as any;
      changeEvent.matches = true;
      const handler = addEventListenerMock.mock.calls[0][1];
      handler(changeEvent);
    });

    expect(result.current).toBe(true);

    // Simulate another change event back to false
    act(() => {
      const changeEvent = new Event('change') as any;
      changeEvent.matches = false;
      const handler = addEventListenerMock.mock.calls[0][1];
      handler(changeEvent);
    });

    expect(result.current).toBe(false);
  });

  it('should cleanup event listener on unmount', () => {
    const { unmount } = renderHook(() => usePrefersReducedMotion());

    expect(addEventListenerMock).toHaveBeenCalledTimes(1);
    expect(removeEventListenerMock).toHaveBeenCalledTimes(0);

    unmount();

    expect(removeEventListenerMock).toHaveBeenCalledTimes(1);
    expect(removeEventListenerMock.mock.calls[0][0]).toBe('change');
    expect(removeEventListenerMock.mock.calls[0][1]).toBe(addEventListenerMock.mock.calls[0][1]);
  });
});
