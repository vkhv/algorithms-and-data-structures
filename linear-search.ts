// O(n)
function main(list: number[], item: number): number {
	return list.reduce(mapNumberWithArrayItem(item), -1)
}

interface ReduceArrayFunction extends Function {
    (prev: number, current: number, index: number): number;
}

function mapNumberWithArrayItem(item: number): ReduceArrayFunction  {
	return (prev: number, current: number, index): number => current === item ? index : prev;
}
