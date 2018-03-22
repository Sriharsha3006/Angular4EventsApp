import {Routes} from '@angular/router'
import {EventsListComponent,
        EventsDetails,
        EventsCreateComponent,
        CreateSessionComponent
        } from './events/EventsIndex'
import {Error404Componet} from './errors/404.component';
import {EventsRouteActivator} from './events/details/events-route-activator.service';

export const appRoutes:Routes = [
       {path:'events/new',component:EventsCreateComponent,canDeactivate:['canDeactivateCreateEvent']},
       {path:"events",component:EventsListComponent},
       {path:'events/:id',component:EventsDetails,canActivate:[EventsRouteActivator]},
       {path:'404',component:Error404Componet},
       {path:'',redirectTo:"/events",pathMatch:'full'},
       {path:'user', loadChildren:'app/user/user.module#UserModule'},
       {path:'events/session/create', component:CreateSessionComponent}
]