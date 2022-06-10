import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../models/IUser";
import {UsersService} from "../../users-services/users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:IUser

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UsersService) { }

  ngOnInit(): void {

      this.activatedRoute.params.subscribe(({id}) =>
      this.userService.getUser(id).subscribe(value => this.user=value))
    }



}

