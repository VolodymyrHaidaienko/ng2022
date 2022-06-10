import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarsService} from "../../car-servisec/cars.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private carsService: CarsService,
              private router: Router) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    })
  }

  login(): void {
    this.carsService.loginClient(this.form.getRawValue()).subscribe(value => {
      this.carsService.setToken(value)
      this.router.navigate(['cars'])
    })


  }
}
