import {EventsListComponent,
        EventsThumbnail,
        EventsService,
        EventsDetails,
        EventsCreateComponent,
        EventsRouteActivator,
        CreateSessionComponent,
        SessionDetailsComponent,
        CollapsibleWellComponent,
        DurationPipe} from './events/EventsIndex'
import {AuthService} from './user/auth.service';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {EventsAppComponent} from './events-app.component'
import {NavBarComponent} from './nav/nav-bar.component'
import {Error404Componet} from './errors/404.component'
import {appRoutes} from './routes'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';

/*Components are registered into this module, this is done using declarations
 * Here EventsAppComponent is the container for all the components in our app
 * So we are going to tell our module that we use this component(EventsAppComponent) to bootstarp our module
 * In order to bootstrap this module from index.HTML file, we have to create a main.ts file, so that index.HTMl
 * file loads this main.ts file for initial bootstarping and load this module
 * Services have to be registered to this module using "providers"
 */

@NgModule({
    imports:[BrowserModule,
             FormsModule,
             ReactiveFormsModule,
             HttpModule,
             RouterModule.forRoot(appRoutes)],
    declarations:[EventsAppComponent,EventsListComponent,
                  EventsThumbnail, NavBarComponent,EventsDetails,
                  EventsCreateComponent,Error404Componet,
                  CreateSessionComponent, SessionDetailsComponent,
                  CollapsibleWellComponent, DurationPipe],
    bootstrap:[EventsAppComponent],
    providers:[EventsService,
               EventsRouteActivator,
               {
                provide:'canDeactivateCreateEvent', 
                useValue:checkDirtyState
               },
               AuthService
               ]
})
export class AppModule {}

    function checkDirtyState(eventCreate:EventsCreateComponent) {
        if(eventCreate.isDirty)
            return window.confirm("You have not saved!!, would you like to contiue?")
        return true
    }