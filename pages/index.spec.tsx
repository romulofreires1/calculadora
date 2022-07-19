import "@testing-library/jest-dom";
import { calculate } from "./index";

test("caculation function", async () => {
  expect(calculate(5, 1, 2)).toBe(7);
  expect(calculate(5, 2, 2)).toBe(3);
  expect(calculate(5, 3, 2)).toBe(10);
  expect(calculate(5, 4, 2)).toBe(2.5);
});
