/*jshint esversion: 6*/
class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
  }

  start() {
    let update = this.update();
    const mainInterval=setInterval(function(){
      return update;
    }, 1000);
   }
  stop(nextFloor) {
    cleanInterval(mainInterval);
  }
  update(){
     this.log();
   }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp(){
    this.floor++;
  }
  floorDown(){
    this.floor--;
   }
  call(person){
    this.requests.push(person);
    this.floor = person.originFloor;
    console.log(this.requests);

  }
  log() {
    console.log("Direction:| Floor:"+this.floor );
   }
}

module.exports = Elevator;
