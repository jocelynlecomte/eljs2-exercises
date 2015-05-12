var ancestryFile = require('./ancestry.js');

var ancestry = JSON.parse(ancestryFile);

function average(array) {
	function plus(a, b) { return a + b; }
  	return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(average(ancestry
	.filter(function(person) {
		return byName[person.mother] != null;
	})
	.map(function(person) {
		return person.born - byName[person.mother].born;
	})));

// → 31.2