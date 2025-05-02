function minSubArrayLen(target, arr){
    let left = 0, sum = 0, minLen = Infinity;
    for(let right = 0; right < arr.length; right++){
        sum += arr[right]; // expand window

    while(sum >= target){
        minLen = Math.min(minLen, right - left + 1);
        sum -= arr[left] // shrink window
        left++;
      }
    }
    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2 ([4,3] or [3,4])
