import { range } from "@/utils";
import { describe, expect, test } from "vitest";

describe("range", () => {
  test("range(10), only pass one parameter", () => {
    const res = range(10);
    expect(Array.isArray(res)).toEqual(true);
    expect(res.length).toEqual(10);
    expect(res).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test("range(1, 4), pass two parameter", () => {
    const res = range(1, 4);
    expect(Array.isArray(res)).toEqual(true);
    expect(res.length).toEqual(3);
    expect(res).toStrictEqual([1, 2, 3]);
  });
  test("range(1, 4, 2), pass three parameter", () => {
    const res = range(1, 4, 2);
    expect(Array.isArray(res)).toEqual(true);
    expect(res.length).toEqual(2);
    expect(res).toStrictEqual([1, 3]);
  });

  test("range(), pass no parameter", () => {
    try {
      range();
    } catch (error) {
      expect(error.message).toEqual("must pass at least one parameter");
    }
  });
});
