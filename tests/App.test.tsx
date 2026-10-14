import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { App } from "../src/App";
import { links } from "../src/content";

test("every in-page link targets a section that exists", () => {
  const { container } = render(<App />);
  const anchors = [
    ...container.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'),
  ];
  expect(anchors.length).toBeGreaterThan(0);
  for (const anchor of anchors) {
    expect(container.querySelector(anchor.hash), anchor.hash).not.toBeNull();
  }
});

test("every contribute link leads to the Discord", () => {
  render(<App />);
  const contribute = screen.getAllByRole("link", { name: /contribut/i });
  expect(contribute.length).toBeGreaterThan(0);
  for (const link of contribute) {
    expect(link).toHaveAttribute("href", links.discord);
  }
});
