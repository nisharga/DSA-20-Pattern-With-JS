function countOverlaps(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    if (current[0] <= prev[1]) {
      count++;
    } else {
      prev = current;
    }
  }
  return count;
}

console.log(
  countOverlaps([
    [1, 3],
    [2, 6],
    [8, 10],
    [9, 12],
  ])
); //2

console.log(
  countOverlaps([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // 0

console.log(
  countOverlaps([
    [1, 5],
    [5, 10],
    [15, 20],
  ])
); // 1
