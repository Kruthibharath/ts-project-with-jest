import { add, sub } from "../src/calc";

describe("test add function", () => {
  it("should return 15 for add(10,5)", () => {
    expect(add(10, 5)).toBe(15);
  });
  it("should return 5 for add(2,3)", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("test subtract function", () => {
  it("should return 5 for add(10,5)", () => {
    expect(sub(10, 5)).toBe(5);
  });
  it("should return 9 for add(12,3)", () => {
    expect(sub(12, 3)).toBe(9);
  });
});
