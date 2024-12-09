var string = "abc123xyz";
var numberRe = /\d+/;  // Matches one or more digits
var i = 3;  // Assume i is defined elsewhere

var n = numberRe.exec(string.slice(i, i + 1));
console.log(n);  // Output: ['1'], or null if no match
