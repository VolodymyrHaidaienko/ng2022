import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from "./users-components/users/users.component";
import {UsersService} from "./users-services/users.service";
import {UserComponent} from './users-components/user/user.component';
import {UserDetailsComponent} from './users-components/user-details/user-details.component';
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        UsersComponent,
        UserComponent,
        UserDetailsComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        FormsModule
    ],
    exports: [
        UserComponent,
        UsersComponent
    ],
    providers: [
        UsersService
    ]
})
export class UsersModule {
}
