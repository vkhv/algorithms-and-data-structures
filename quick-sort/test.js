const quickSort = require('./index');
const assert = require('assert');

const unsortedArray = [10, 5, 2, 3];
const sortedArray = [2, 3, 5, 10];
describe('quicksort algorithm', function() {
	it('check base case', () => {
		assert.deepEqual(quickSort(unsortedArray), sortedArray);
	});
  });
