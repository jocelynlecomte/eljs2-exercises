function ArraySeq(arr) {
	this.arr = arr;
	this.curr = -1;
}

ArraySeq.prototype.hasNext = function() {
	return (this.curr < this.arr.length - 1); 
} 

ArraySeq.prototype.next = function() {
	this.curr++;
	return (this.curr < this.arr.length)? this.arr[this.curr] : undefined;
}

function RangeSeq(from, to) {
	this.curr = from - 1;
	this.to = to;
}

RangeSeq.prototype.hasNext = function() {
	return (this.curr < this.to - 1); 
}

RangeSeq.prototype.next = function() {
	this.curr++;
	return (this.curr < this.to)? this.curr : undefined;
}

function logFive(sequence) {
	for (var i = 0; i < 5; i++) {
		if (!sequence.hasNext()) return;
		console.log(sequence.next());
	}
}

logFive(new ArraySeq([1, 2]));

logFive(new RangeSeq(100, 1000));

logFive(new RangeSeq(10, 12));