import { Injectable } from '@angular/core';

@Injectable()
export class UsersServiceService {

  myActiveUsers = ['Max', 'Anna'];
  myInactiveUsers = ['Chris', 'Manu'];

  setToInactive(id: number) {
    
    this.myInactiveUsers.push(this.myActiveUsers[id]);
    this.myActiveUsers.splice(id, 1);
  }

  setToActive(id: number) {
    this.myActiveUsers.push(this.myInactiveUsers[id]);
    this.myInactiveUsers.splice(id, 1);
  }

}