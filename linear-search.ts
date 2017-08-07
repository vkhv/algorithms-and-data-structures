interface ReduceArrayFunction extends Function {
    (prev: number, current: number, index: number): number;
}

function mapNumberWithArrayItem(item: number): ReduceArrayFunction  {
	return (prev: number, current: number, index): number => current === item ? index : prev;
}

// O(n)
function binarySearch(list: number[], item: number): number | boolean {
	return list.reduce(mapNumberWithArrayItem(item), -1)
}

