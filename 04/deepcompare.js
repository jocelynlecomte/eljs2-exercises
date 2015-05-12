function deepEqual(val1, val2) {
	if (val1 === val2) {
		return true;
	}
	
	var type1 = typeof(val1);
	var type2 = typeof(val2);

	if (type1 != type2) {
		return false;
	}

	if (type1 === 'object') {
		if (propertiesCount(val1) != propertiesCount(val2)) {
			return false;
		}
		for (var prop in val1) {
			if (val2[prop] == undefined) {
				return false;
			}
			return deepEqual(val1[prop], val2[prop]);
		}
	}
	else {
		return val1 === val2;
	}
}

function propertiesCount(obj) {
	var count = 0;
	for (var prop in obj) {
		count++;
	}
	return count;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(new Number(3), new Number(5)));
// → true