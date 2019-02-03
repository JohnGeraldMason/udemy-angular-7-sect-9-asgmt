import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersServiceService: UsersServiceService){}


  ngOnInit() {
    this.users = this.usersServiceService.myInactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersServiceService.setToActive(id);
  }
}