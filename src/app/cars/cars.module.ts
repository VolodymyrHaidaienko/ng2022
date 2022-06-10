import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';

import { LoginComponent } from './components/login/login.component';
import {CarsComponent} from "./components/cars/cars.component";
import {RegisterComponent} from "./components/register/register.component";
import { CarComponent } from './components/car/car.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CarsService} from "./car-servisec/cars.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {UsersInterceptor} from "./users.interceptor";
import {UsersModule} from "../users/users.module";




@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        CarsComponent,
        CarComponent
    ],
    imports: [
        CommonModule,
        CarsRoutingModule,
        ReactiveFormsModule,
        UsersModule

    ],
    exports: [
        CarsComponent
    ],
    providers: [
        CarsService,
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: UsersInterceptor

        }
    ]
})
export class CarsModule { }
