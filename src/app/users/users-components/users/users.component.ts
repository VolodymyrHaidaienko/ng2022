import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {UsersService} from "../../users-services/users.service";
import {IUsers} from "../../../models/IUsers";
import {IUser} from "../../../models/IUser";




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: IUsers[] = [];
  userSearch: IUser = {}
  newFilterUsers:IUsers[]

  userCatch:IUser={}





  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }


  search():void {
    this.userService.getUsers().subscribe(value => {
      const filterUsersArray=this.userService.filterUser(value,this.userSearch)
      this.newFilterUsers=filterUsersArray

    })

  }


  catchUserEmitt(user: IUser) {
    this.userCatch=user



  }
}




