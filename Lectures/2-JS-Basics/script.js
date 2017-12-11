/*
 console.log('hello from source.js');

var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


// Lecture: Variables 2

/*
var name = 'John';
var age = 26;

console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?')

console.log(lastName);

alert(name + ' is a ' + age + ' old ' + job + '. Is he married? ' + isMarried + '.');
*/

/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
// console.log(ageJohn);
// console.log(ageMark);

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

// Lecture: if/else statements

/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
    console.log(name + ' is married.');
} else {
    console.log(name + ' is not married.');
}

isMarried = false;

if(isMarried) {
    console.log('YES');
} else {
    console.log('NO');
}
*/


// Lecture: boolean logic and switch

/*
var age = 16;

if (age < 20) {
    console.log('Je to decko.');
} else {
    console.log('Je to chlap.');
}

var job = 'teacher';

job = prompt('Ake je jeho povolanie?')

switch (job) {
    case 'teacher':
        console.log('Je to ucitel.');
        break;
    case 'policajt':
        console.log('dava papuce');
        break;
    default:
        console.log('je nieco ine');
}
*/


// CODING CHALLENGE

/*

var adamAge = 30;
var adamHeight = 160;
var adamScore= adamHeight + 5 * adamAge;

var matkaAge = 30;
var matkaHeight = 160;
var matkaScore= matkaHeight + 5 * matkaAge;

var sarkaAge = 30;
var sarkaHeight = 160;
var sarkaScore= sarkaHeight + 5 * sarkaAge;


if (adamScore > matkaScore && adamScore > sarkaScore){
    console.log('adam vyhral');
} else if (matkaScore > adamScore && matkaScore > sarkaScore) {
    console.log('matka vyhrala');
} else if (sarkaScore > adamScore && sarkaScore > matkaScore) {
    console.log('sarka vyhrala');
} else {
    console.log('remiza');
}

*/


// Lecture: Functions



/*
function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

function yearsToRetirement(name, birth) {
    var age = calculateAge(birth);
    var yearsLeft = 65 - age;

    if (yearsLeft > 0) {
        console.log(name + ' has ' + yearsLeft + ' years left to retirement.');
    } else if (yearsLeft === 0) {
        console.log(name + ' is retiring this year.');
    } else {
        console.log(name + ' has already retired.');
    }
}

var userName = prompt('What/s your name?');
var userAge = prompt('What/s your year of birth');

yearsToRetirement(userName, userAge);
*/


// Lecture: arrays


/*

 var friends = ['Adam', 'Matka', 'Vrtko'];

 friends.push('Sarka');
 friends.unshift('Jose');
 friends.pop(); // removes the last element
 friends.shift(); // removes first element
 friends.push('Jose');
 var indexOfMatka = friends.indexOf('Matka'); // returns index of a specified string

 console.log(friends);
 console.log(indexOfMatka);

 if (friends.indexOf('Jose') === -1 ){ // if string is not in the array, returns -1
 console.log('Jose bohuzial nieje kamos.');
 } else {
 console.log('Jose je kamos.');
 }
 */




// Lecture: objects


/*
var thisYear = 2017;

var adam = {
    gender: 'male',
    iq: 54,
    beauty: 'very high',
    dateOfBirth: 1990,
    calculateAge: function() {
        this.age = thisYear - this.dateOfBirth;
    }
}

var inteligencia = 'iq';

adam.height = 183;
adam.height -= 100;

adam.calculateAge();

console.log(adam);
console.log(adam.age);
console.log(adam[inteligencia]);

// pokus o napisanie funkcie

var dickLength = function (sto) {
    return thisYear - sto - 17;
}

console.log(dickLength(100));
*/



// Lecture: Loops


/*
// for loops
for (var i = 1; i < 10; i++) {
    console.log(i);
}


var names = ['Adam', 'Matka', 'Sarka', 'Knedla'];

for (var i = (names.length - 1 ); i >= 0; i--) {
    console.log(names[i]);
}
*/


// while loops

/*
var names = ['Adam', 'Matka', 'Sarka', 'Knedla'];

var i = 0;

while (i < names.length) {
    console.log(names[i]);
    i++;
}

console.log('Break example');
// break (skonci loop)

for (var i = 0; i <= 5; i++) {
    console.log(i);
    if (i === 3) {
        break;
    }
}
// continue (zacne loop od zaciatku ("continue from beginning"), cize nieco ako jump to start)

console.log('Continue example');
for (var i = 0; i <= 5; i++) {
    if (i <= 3) {
        continue;
    }
    console.log(i);
}
*/

var currentYear = 2017;

var years = [1990, 2001, 2012];
console.log(years);

var newYears = [];
console.log(newYears);

for (i = 0; i < years.length; i++) {
    newYears.push(years[i]);
}

console.log(newYears);

// cez funkciu
console.log('cez funkciu');

var age = function(yearofBirth) {
    var thisAge = currentYear - yearofBirth;
    return thisAge;
}

var fullAge;



function listMyPeople (myPeople) {

    var fullAgeArray = [];

    for (i = 0; i < myPeople.length; i++) {
        console.log('Person number ' + (i + 1));
        console.log(myPeople[i]);
        console.log(age(myPeople[i]));

        var thisAge = age(myPeople[i]);
        if (thisAge <= 18) {
            fullAge = false;
        } else {
            fullAge = true;
        }
        console.log(fullAge);

        fullAgeArray.push(fullAge);
    }

    console.log(myPeople);
    console.log(fullAgeArray);

}


listMyPeople(newYears);
var newYears2 = [1980, 1991, 2012];

listMyPeople(newYears2);



/* povodna cista funkcia bez objektu - backup

function listMyPeople (myPeople) {

    for (i = 0; i < myPeople.length; i++) {
        console.log('Person number ' + (i + 1));
        console.log(myPeople[i]);
        console.log(age(myPeople[i]));

        var thisAge = age(myPeople[i]);
        if (thisAge <= 18) {
            fullAge = false;
        } else {
            fullAge = true;
        }
        console.log(fullAge);

        var fullAgeArray = [];

        fullAgeArray.push(fullAge);
    }

    console.log(fullAgeArray);

}

*/



/*
// cez objekt
console.log('cez objekt');

var person = {
    thisAge: currentYear - yearofBirth,
    calculateFullAge: function () {
        if (thisAge <= 18) {
            this.fullAge = true;
        } else {
            this.fullAge = false;
        }
    }
}

for (i = 0; i < newYears.length; i++) {
    console.log('Person number ' + (i + 1));
    console.log(person.thisAge);
    console.log(person);
    console.log();
}*/
