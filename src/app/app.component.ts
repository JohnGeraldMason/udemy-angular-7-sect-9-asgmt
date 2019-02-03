import { Component, OnInit } from '@angular/core';

import { UsersServiceService } from './users-service.service';
import { CounterService } from './count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];
  activeUserCount = 0;
  inactiveUserCount = 0;

  constructor(private usersServiceService: UsersServiceService,
              private counterService: CounterService){}
  
  ngOnInit() {
    this.activeUsers = this.usersServiceService.myActiveUsers;
    this.inactiveUsers = this.usersServiceService.myInactiveUsers;    
    this.activeUserCount = this.counterService.inactiveToAactiveCounter;
    this.inactiveUserCount = this.counterService.activeToInactiveCounter;
  }
}