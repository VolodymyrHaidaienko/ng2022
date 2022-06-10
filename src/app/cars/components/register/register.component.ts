import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {CarsService} from "../../car-servisec/cars.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  userNameEror: string

  constructor(private carsService: CarsService,
              private router: Router) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.minLength(2), Validators.maxLength(6)]),
      password: new FormControl(null, [Validators.minLength(2), Validators.maxLength(6)]),
      confirmpassword: new FormControl(null, [Validators.minLength(2), Validators.maxLength(6)])
    }, [this.checkpassword])
  }

  register(): void {
    delete this.form.value.confirmpassword
    this.carsService.registerClient(this.form.value).subscribe(() =>
      this.router.navigate(["login"]),
        e => this.userNameEror = e.error.username[0])


  }

  checkpassword(from: AbstractControl): ValidationErrors | null {
    const getpassword = from.get('password')
    const getconfirmpassword = from.get('confirmpassword')
    return getpassword?.value === getconfirmpassword?.value ? null : {notSame: true}
  }
}
