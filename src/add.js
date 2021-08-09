// Add - Adds two numbers and returns the result.

module.exports = {
  title: "add",
  desc: "Adds two numbers and returns the result.",
  types: "add(x: number, y: number) -> number",

  timeComplexity: "O(1)",

  // add(x: number, y: number) -> number
  // returns 0 if arguments have the wrong type
  run: function(x, y) {
    if (typeof(x) !== "number" || typeof(y) !== "number") {
      return 0;
    }

    return x + y;
  }
}
