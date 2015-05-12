function countBs(s) {
	return countChar(s, 'B');
}

function countChar(s, c) {
	var count = 0;
	for (var i = 0; i < s.length; i++) {
		if (s.charAt(i) === c) {
			count++;
		}
	}
	return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4