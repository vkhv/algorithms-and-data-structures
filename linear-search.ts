// Returns index of item from array or -1
// Complexity O(n)
function main(list: number[], item: number): number {
	return list.reduce(mapNumberWithArrayItem(item), -1)
}

interface ReduceArrayFunction extends Function {
    (prev: number, current: number, index: number): number;
}

function mapNumberWithArrayItem(item: number): ReduceArrayFunction  {
	return (prev: number, current: number, index: number): number => current === item ? index : prev;
}
