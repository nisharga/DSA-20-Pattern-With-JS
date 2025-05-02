function fractionalKnapsack(items, capacity) {
  // Sort items by value-to-weight ratio in descending order
  items.sort((a, b) => b.value / b.weight - a.value / a.weight);

  let totalValue = 0;
  let remainingCapacity = capacity;

  for (let i = 0; i < items.length; i++) {
    let { value, weight } = items[i];

    if (weight <= remainingCapacity) {
      // Take the full item
      totalValue += value;
      remainingCapacity -= weight;
    } else {
      // Take a fraction of the item
      totalValue += (value / weight) * remainingCapacity;
      break; // Knapsack is full
    }
  }

  return totalValue.toFixed(2); // Return the maximum value with 2 decimal precision
}

// Example usage
const items = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 },
];

const capacity = 50;
console.log("Maximum value in Knapsack:", fractionalKnapsack(items, capacity));
// Output: 240.00
