function range(start, end, step) {
	var array = [];
	if (!step) {
		step = 1;
	}
	for (var i = start; (step > 0)? i <= end : i >= end; i = i + step) {
		array.push(i);
	}
	return array;
}

function sum(numbers) {
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]