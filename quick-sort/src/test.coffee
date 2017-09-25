quickSort = require('./index');
assert = require('assert');
describe "quicksort algorithm", ->
   it "checks base case", ->
      unsortedArray = [10, 5, 2, 3]
      sortedArray = [2, 3, 5, 10]
      assert.deepEqual(quickSort(unsortedArray), sortedArray);
      
   it "checks first recursion case (0 elem in array)", ->
      assert.deepEqual(quickSort([]), [])

   it "checks first recursion case (0 elem in array)", ->
    assert.deepEqual(quickSort([]), [])

   it 'check array with 1 elem', ->
     assert.deepEqual(quickSort([1]), [1])


   it 'checks second recursion case array with 2 sorted elems', ->
     assert.deepEqual(quickSort([1, 2]), [1, 2])
