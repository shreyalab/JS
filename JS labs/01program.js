console.log("Hi i m Shreya");
var n = 2;
function square(n) {
  console.log("value of n is :" + n);
  var ans = n * n;
  return ans;
}
var square2 = square(n);
console.log(square2);

var square4 = square(4);
console.log(square4);

var squareEmpty = square();

console.log(squareEmpty);

console.log("The end");
