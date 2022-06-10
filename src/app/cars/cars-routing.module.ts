import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CarsComponent} from "./components/cars/cars.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "../app-components/home/home.component";
import {CarComponent} from "./components/car/car.component";

const routes: Routes = [
  {path: '', component:HomeComponent,
    children:[
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'cars', component: CarsComponent},
      {path: 'car', component: CarComponent}
    ]}



];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class CarsRoutingModule {
}
