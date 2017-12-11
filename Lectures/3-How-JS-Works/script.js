///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


/*

Shit. New scope is created only inside functions.
 Not inside loops or if statements. Lol fuck...

*/


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


/*

- in a regular function call, `this` points to window object, because object this function is attached to is the global object.
- in a method (for example inside an object), `this` would point to parent object
- but still... `this` inside a function that is inside an object would still point to window, because it's a function

Method borrowing - napr ked si poziciam funkciu z inej metody

*/







