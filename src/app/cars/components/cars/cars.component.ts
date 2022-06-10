import {Component, OnInit} from '@angular/core';
import {CarsService} from "../../car-servisec/cars.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";


import {ICars} from "../../../models/ICars";





@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  form: FormGroup
  cars: ICars[]=[]



  constructor(private carsService: CarsService,
              private router: Router) {
    this.createForm()
  }

  ngOnInit(): void {


  }

  createForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      model: new FormControl(null),
      price: new FormControl(null),
      year: new FormControl(null)

    })
  }

  createCar(): void {
    this.carsService.create(this.form.value).subscribe(value => {
      this.cars.push(value)
      this.router.navigate(['car'])
    })


  }


  next():void {
    this.router.navigate(['car'])
  }


}
