import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot,CanActivate,Router} from '@angular/router';
import {EventsService} from '../shared/events-service'
@Injectable()
export class EventsRouteActivator implements CanActivate {
   
    constructor(private eventsService:EventsService, private router:Router) {
	
    }
    
    canActivate(route:ActivatedRouteSnapshot):boolean{
        const eventExists=!!this.eventsService.getEvent(+route.params['id'])
        
        if(!eventExists)
            this.router.navigate(['404'])
        else
            return eventExists
    }
  
}