function eraseOverlapIntervals(intervals) {
  if (!intervals.length) return 0;

  // Step 1: Sort intervals by end time
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastEndTime = intervals[0][1];

  // Step 2: Iterate through intervals
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (start < lastEndTime) {
      // Interval overlaps, increment count of removed intervals
      count++;
    } else {
      // No overlap, update the end time
      lastEndTime = end;
    }
  }

  return count;
}
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
); // 1
