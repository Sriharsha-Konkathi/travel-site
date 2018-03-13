var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person'; //ES6 way of importing the module

class Adult extends Person {
    payTax() {
        console.log(this.name + " now owes $0 in taxes. ");
    }
}

alert("this is testing 123 and again");

var john = new Person("John Doe","blue");
john.greet();
var jane = new Adult("Jane Smith","orange");
jane.greet();
jane.payTax();

$("h1").remove();
