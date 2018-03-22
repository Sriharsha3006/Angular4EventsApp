import {UserProfileComponent,
        LoginComponent} from './UserIndex'
import {Routes} from '@angular/router';

export const UserRoutes:Routes = [
    {path:'profile', component:UserProfileComponent,canDeactivate:['canDeactivateUpdateProfile']},
    {path:'login',component:LoginComponent}]