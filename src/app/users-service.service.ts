import { Injectable } from '@angular/core';
import { CounterService } from './count.service';


@Injectable()
export class UsersServiceService {

  myActiveUsers = ['Max', 'Anna'];
  myInactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService){}

  setToInactive(id: number) {
    
    this.myInactiveUsers.push(this.myActiveUsers[id]);
    this.myActiveUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

  setToActive(id: number) {
    this.myActiveUsers.push(this.myInactiveUsers[id]);
    this.myInactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }
}