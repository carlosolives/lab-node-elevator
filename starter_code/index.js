/*jshint esversion: 6*/
const Elevator = require('./elevator.js');

const Person = require('./person.js');


let elevator = new Elevator();
const maxFloor = elevator.MAXFLOOR;

let namePerson  = "carlos";
let originFloor = "5";
let destinationFloor ="0";


let person = new Person(namePerson, originFloor, destinationFloor);
elevator.call(person);


let request = elevator.requests.shift();

if(request.originFloor < request.destinationFloor){
  let origin = parseInt(request.originFloor);
  let destination = parseInt(request.destinationFloor);

  while(origin<destination && maxFloor>=destination){
    elevator.floorUp();
    origin++;
  }

}
if(request.originFloor > request.destinationFloor){
  let origin = parseInt(request.originFloor);
  let destination = parseInt(request.destinationFloor);
  while(origin>destination && destination>=0){
    elevator.floorDown();
    origin--;
  }

}
//elevator.floorUp();
elevator.start();
