quickSort = (array) -> 
  if array.length < 2
    return array;

  if array.length == 2
    # If first elem more than second will swap them and return new array.
    # or just return sorted array with 2 items.
    return if array[0] < array[1] then array else [array[1], array[0]];

  pivot = array[0]
  subArrayWithItemsLessThanPivot = array.filter((item) -> item < pivot);
  subArrayWithItemsMoreThanPivot = array.filter((item) -> item > pivot);

  return [...quickSort(subArrayWithItemsLessThanPivot), pivot, ...quickSort(subArrayWithItemsMoreThanPivot)];

module.exports = quickSort;
