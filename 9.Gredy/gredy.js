function activitySelection(start, finish, n) {
  // Sort activities based on finish time
  let activities = [];
  for (let i = 0; i < n; i++) {
    activities.push([start[i], finish[i]]);
  }
  activities.sort((a, b) => a[1] - b[1]);

  let selectedActivities = [];
  let lastFinishTime = 0;

  for (let i = 0; i < n; i++) {
    if (activities[i][0] >= lastFinishTime) {
      selectedActivities.push(i);
      lastFinishTime = activities[i][1];
    }
  }

  return selectedActivities;
}

// Example usage
let start = [1, 3, 0, 5, 8, 5];
let finish = [2, 4, 6, 7, 9, 9];
let n = start.length;

let result = activitySelection(start, finish, n);
console.log("Selected activities:", result);
