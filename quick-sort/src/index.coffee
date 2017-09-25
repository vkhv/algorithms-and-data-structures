quickSort = (array) -> 
	if array.length < 2
		return array;

	if array.length == 2
		# If first elem more than second will swap them and return it like new array.
		# or just return array sorted array with 2 items.
		return if array[0] < array[1] then array else [array[1], array[0]];

	pivot = array[0]
	itemsAreLessPivotSubArray = array.filter((item) -> item < pivot);
	itemsAreMoreThenPivotSubArray = array.filter((item) -> item > pivot);

	return [...quickSort(itemsAreLessPivotSubArray), pivot, ...quickSort(itemsAreMoreThenPivotSubArray)];


module.exports = quickSort;

