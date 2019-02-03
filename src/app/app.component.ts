import { Component, OnInit } from '@angular/core';

import { UsersServiceService } from './users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];

  constructor(private usersServiceService: UsersServiceService){}
  
  ngOnInit() {
    this.activeUsers = this.usersServiceService.myActiveUsers;
    this.inactiveUsers = this.usersServiceService.myInactiveUsers;
  }
}