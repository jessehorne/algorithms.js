const binarySearch = require("../src/binarySearch.js").run;

test("binarySearch: 2 in [1, 2, 3, 4, 5] will be at index 1", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
});

test("binarySearch: 4 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] will be at index 3", () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 4)).toBe(3);
});


test("binarySearch: 1 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] will be at index 0", () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 1)).toBe(0);
});

test("binarySearch: 12 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] will be at index 11", () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12)).toBe(11);
});

test("binarySearch: 155 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] will not be found so -1", () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 155)).toBe(-1);
});

test("binarySearch: 5 in [0, 1, 3, 5, 8, 9, 10, 11, 14, 22, 24, 40, 45, 50] will be 3", () => {
  expect(binarySearch([0, 1, 3, 5, 8, 9, 10, 11, 14, 22, 24, 40, 45, 50], 5)).toBe(3);
});
