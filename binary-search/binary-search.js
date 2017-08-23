const binarySearch = (arraySortedNumbers, elementToSearch) => {
  
      let leftBoundary = 0;
      let rightBoundary = arraySortedNumbers.length - 1;
    
  
      while (leftBoundary <= rightBoundary) {
          let mid = Math.floor((leftBoundary + rightBoundary) / 2);
  
        if(arraySortedNumbers[mid] === elementToSearch) {
          return mid
        }
    
        if(arraySortedNumbers[mid] < elementToSearch) {
          leftBoundary = mid + 1;
        }
    
        if(arraySortedNumbers[mid] > elementToSearch) {
          rightBoundary = mid - 1;
        }
      }
      return -1;
  }
  
  module.exports = binarySearch;