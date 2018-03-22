import {Component} from '@angular/core'
import {EventsService} from '../shared/events-service'
import {ISession} from '../shared/events.module';
import {IEvents} from '../shared/events.module';
import {ActivatedRoute} from '@angular/router'

@Component({
    templateUrl:'app/events/details/html/events-details.component.html',
    styles:[`
            .container {padding-left:20px; padding-right:20px;} 
            .event-image {height: 100px; } 
            a {cursor:pointer-I}
    `]
   })
export class EventsDetails {
    event:IEvents
    addMode:boolean=false
    filterBy:string='all'
    sortBy:string='name'
    
    constructor(private eventsService:EventsService,private route:ActivatedRoute) {
        this.event=this.eventsService.getEvent(+this.route.snapshot.params['id']);
    }
    
    addSession(){
       this.addMode=true
    }
    
    saveSessionInParent(sessionObj:ISession){
        this.event.sessions.push(sessionObj)
        this.eventsService.updateEvent(this.event)
        this.addMode=false
    }
    
    cancelAddSessionInParent(){
        this.addMode=false
    }
}