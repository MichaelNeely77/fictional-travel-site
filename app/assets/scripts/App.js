var $ = require('jquery');
var Person = require('./modules/Person');

alert('A, b, c, 1, 2, 3.');

var john = new Person('John Doe', 'blue');
john.greet();

var jane = new Person('Jane Smith', 'green');
jane.greet();

$('h1').remove();
