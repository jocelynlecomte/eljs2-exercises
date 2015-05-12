function arrayToList(array) {
	var list = null;
	for (var i = array.length - 1; i >= 0; i--) {
		list = {
			value : array[i],
			rest: list
		}
	}
	return list;
}

function listToArray(list) {
	var array = [];
	for (var node = list; node; node = node.rest) {
		array.push(node.value);	
	}
	return array;
}

function prepend(elt, list) {
	return {
		value: elt,
		rest: list
	}
}

function nth(list, pos) {
	var i = 0;
	while (i != pos) {
		if (list.rest == null) {
			return undefined;
		}
		list = list.rest;
		i++;
	}
	return list.value;
}

function nthrecursive(list, pos) {
	if (!list) {
		return undefined;
	}
	else if (pos === 0) {
		return list.value;
	}
	else {
		return nthrecursive(list.rest, pos - 1);
	}
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20