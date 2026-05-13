import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { WordReveal } from "./WordReveal";

// Mock framer-motion to avoid animation issues in tests and to simplify rendering
vi.mock("motion/react", () => {
  return {
    motion: {
      // Destructure motion-specific props so they don't get passed down to DOM elements
      h2: ({ children, className, initial, whileInView, viewport, variants, transition, ...props }: any) =>
        <h2 className={className} data-testid="motion-h2" {...props}>{children}</h2>,
      span: ({ children, className, initial, whileInView, viewport, variants, transition, ...props }: any) =>
        <span className={className} data-testid="motion-span" {...props}>{children}</span>,
    },
    useReducedMotion: () => false,
  };
});

describe("WordReveal Component", () => {
  it("renders the correct number of words", () => {
    render(<WordReveal text="Hello world from test" />);

    // 4 words means 4 motion.span elements
    const spans = screen.getAllByTestId("motion-span");
    expect(spans).toHaveLength(4);

    expect(spans[0]).toHaveTextContent("Hello");
    expect(spans[1]).toHaveTextContent("world");
    expect(spans[2]).toHaveTextContent("from");
    expect(spans[3]).toHaveTextContent("test");
  });

  it("applies the custom className to the h2 wrapper", () => {
    const customClass = "my-custom-class text-red-500";
    render(<WordReveal text="Test" className={customClass} />);

    const h2Element = screen.getByTestId("motion-h2");
    expect(h2Element).toHaveClass(customClass);
  });

  it("handles empty string correctly", () => {
    render(<WordReveal text="" />);

    // "".split(" ") results in [""] so there will be 1 element with empty text
    const spans = screen.getAllByTestId("motion-span");
    expect(spans).toHaveLength(1);
    expect(spans[0]).toHaveTextContent("");
  });

  it("handles multiple spaces gracefully (though results in empty spans)", () => {
    render(<WordReveal text="Hello  world" />); // Double space

    // "Hello  world".split(" ") => ["Hello", "", "world"]
    const spans = screen.getAllByTestId("motion-span");
    expect(spans).toHaveLength(3);
    expect(spans[0]).toHaveTextContent("Hello");
    expect(spans[1]).toHaveTextContent("");
    expect(spans[2]).toHaveTextContent("world");
  });
});
