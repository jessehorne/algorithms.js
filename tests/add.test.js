const add = require("../src/add.js").run;

test("add: 1 + 2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("add: -5 + 5 = 0", () => {
  expect(add(-5, 5)).toBe(0);
});

test("add: 'cat' + 1 returns 0 because the inputs are invalid", () => {
  expect(add("cat", 1)).toBe(0);
});
