var a;
console.log(a);

if (a === undefined) {
    console.log('a is undefined');
}   
else {
    console.log('a is defined');
}

var b;
console.log(b);
b=100;
if (b === undefined) {
    console.log('b is undefined');
}   
else {
    console.log('b is defined');
}


 
function s(){
    
    f();
    function f(){
        console.log(r);
    }
}
var r=10;
s();

