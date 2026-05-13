import { render, screen, cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { describe, it, expect, vi, afterEach } from "vitest";
import { WordReveal } from "./WordReveal";
import React from "react";

expect.extend(matchers);

vi.mock("motion/react", () => {
  return {
    motion: {
      h2: ({ initial, whileInView, viewport, variants, ...props }: any) => <h2 {...props} />,
      span: ({ initial, whileInView, viewport, variants, ...props }: any) => <span {...props} />
    },
    useReducedMotion: () => false,
  };
});

describe("WordReveal", () => {
  afterEach(() => {
    cleanup();
  });

  it("splits text into words and renders them correctly", () => {
    const text = "Hello world tests";
    render(<WordReveal text={text} />);

    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toBeInTheDocument();

    // Because spacing is handled by CSS, the text content combines the words without spaces
    expect(h2).toHaveTextContent("Helloworldtests");
  });

  it("applies className to the root h2 element", () => {
    render(<WordReveal text="Test" className="custom-class" />);

    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toHaveClass("custom-class");
  });

  it("renders the correct number of inner spans based on words count", () => {
    const text = "One two three four five";
    const { container } = render(<WordReveal text={text} />);

    const outerSpans = container.querySelectorAll('.overflow-hidden');
    expect(outerSpans).toHaveLength(5);

    text.split(" ").forEach(word => {
      expect(screen.getByText(word)).toBeInTheDocument();
    });
  });
});
