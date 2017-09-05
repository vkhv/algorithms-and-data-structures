import "package:range/range.dart";

main() {
	final result = smalest([1, 2, 4]);
	print(result); // 1
}

num smalest(List<int> array) {
	var smallest = array[0];
	var smallestIndex = 0;
	for (int i in range(array.length)) {
		if(array[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}
	return 1;
}
