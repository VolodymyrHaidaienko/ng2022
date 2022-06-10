import {Component, Input, OnInit} from '@angular/core';
import {CarsService} from "../../car-servisec/cars.service";
import {ICars} from "../../../models/ICars";




@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  cars: ICars[]



  constructor(private carsService: CarsService) {

  }

  ngOnInit(): void {

    this.carsService.getAllCar().subscribe(value => this.cars = value)

  }


  delete(id?:number) {

    this.carsService.deleteByID(id).subscribe(value => {
      const index = this.cars.findIndex(car => car.id === id)
     this.cars.splice(index, 1)

   })
  }

}
