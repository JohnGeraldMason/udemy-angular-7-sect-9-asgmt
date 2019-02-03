export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToAactiveCounter = 0;

    incrementActiveToInactive(){
        this.activeToInactiveCounter++;
        //alert("activeToInactiveCounter: " + this.activeToInactiveCounter);
        console.log('Active To Inactive Counter: ' +this.activeToInactiveCounter);
    }

    incrementInactiveToActive(){
        this.inactiveToAactiveCounter++;
        //alert("inactiveToAactiveCounter: " + this.inactiveToAactiveCounter);
        console.log('Inactive To Active Counter: ' +this.inactiveToAactiveCounter);
    }
}


