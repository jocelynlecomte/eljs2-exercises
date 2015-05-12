function reverseArray(array) {
	var reversedArray = [];
	for (var i = array.length - 1; i >= 0; i--) {
		reversedArray.push(array[i]);
	}
	return reversedArray;	
}

function reverseArrayInPlace(array) {
	var center = Math.floor(array.length / 2);
	for (var i = 0; i < center; i++) {
		var tmp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = tmp;
	}
	return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]