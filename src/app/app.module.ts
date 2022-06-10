import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './app-components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {MenuComponent} from './app-components/menu/menu.component';
import {FormsModule} from "@angular/forms";
import {UsersModule} from "./users/users.module";
import {CarsModule} from "./cars/cars.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UsersModule,
        CarsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
