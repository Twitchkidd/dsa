const array = [1, 2, 3, 'four'];
const val1 = 2;
const val2 = 'four';
const val3 = 4;

const linearSearch = (arr: Array<any>, val: any): number => {
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
};

console.log(linearSearch(array, val1));
console.log(linearSearch(array, val2));
console.log(linearSearch(array, val3));
