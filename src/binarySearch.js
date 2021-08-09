// binarySearch - Returns the index of a number value in a sorted array.

function binarySearch(a, v, start=undefined, end=undefined) {
  // If start and end aren't defined, define them
  if (!start) start = 0;
  if (!end) end = a.length-1;

  // Set the middle
  middle = Math.floor((start + end) / 2);

  // If the value of the array at the index is correct, return the index
  if (a[middle] == v) return middle;

  // If the value being searched is less, look in left half
  if (v < a[middle]) return binarySearch(a, v, start, middle-1);

  // If the value being searched is more, look in right half
  if (v > a[middle]) return binarySearch(a, v, start, end+1);

  // Otherwise, return -1 to show that it wasn't found
  return -1;
}

module.exports = {
  title: "binarySearch",
  desc: "Returns the index of a number value in a sorted array.",
  types: "binarySearch(a: sortedArray, v: number) -> number",

  timeComplexity: "O(log n)",

  // binarySearch(a: sortedArray, v: number) -> number
  // returns -1 if item not found
  run: binarySearch
}
