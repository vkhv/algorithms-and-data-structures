function binarySearch(array, item) {
  let leftBoundary = 0;
  let rightBoundary = array.length - 1;

  while (leftBoundary <= rightBoundary) {
	  let mid = Math.floor(leftBoundary + rightBoundary / 2);
    
    if(array[mid] === item) {
      return mid
    }

    if(array[mid] > item) {
      leftBoundary = mid - 1;
    }

    if(array[mid] < item) {
      rightBoundary = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([20, 40, 70, 90, 100, 200, 300, 400, 500], 200))
