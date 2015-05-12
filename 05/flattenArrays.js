function flatten(arrays) {
	return arrays.reduce(function(prev, curr) {
		return prev.concat(curr);
	}, []);
}

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]