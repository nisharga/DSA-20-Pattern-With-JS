function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  // Step 1: Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const lastMerged = merged[merged.length - 1];
    const current = intervals[i];

    if (current[0] <= lastMerged[1]) {
      // Overlapping: merge
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap: add new interval
      merged.push(current);
    }
  }

  return merged;
}
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
// Output: [[1,6],[8,10],[15,18]]

console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
);
// Output: [[1,5]]
