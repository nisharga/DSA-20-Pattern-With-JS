/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    const current = intervals[i];

    if (current[1] < newInterval[0]) {
      // current interval ends before new interval starts
      result.push(current);
    } else if (newInterval[1] < current[0]) {
      // new interval ends before current interval starts
      result.push(newInterval);
      newInterval = current; // update newInterval to current
    } else {
      // Overlapping intervals, merge them
      newInterval[0] = Math.min(newInterval[0], current[0]);
      newInterval[1] = Math.max(newInterval[1], current[1]);
    }
  }

  // Don't forget to add the last interval
  result.push(newInterval);

  return result;
};
