var ancestryFile = require('./ancestry.js');

var ancestry = JSON.parse(ancestryFile);

function getCentury(person) {
	return Math.ceil(person.died / 100);
}

function average(array) {
	function plus(a, b) { return a + b; }
  	return array.reduce(plus) / array.length;
}

function groupBy(array, fn) {
	var aggregates = {};
	array.forEach(function(elt) {
		var key = fn(elt);
		if (!aggregates[key]) {
			aggregates[key] = [];
		}
		aggregates[key].push(elt);
	});
	return aggregates;
}

var groupedByCentury = groupBy(ancestry, getCentury);

for (var century in groupedByCentury) {
	var personsFromCentury = groupedByCentury[century];
	//console.log(personsFromCentury);
	console.log(century, ':', average(personsFromCentury.map(function(person) {
		return person.died - person.born;
	})));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
