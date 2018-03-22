import {Component} from '@angular/core'
import {EventsService} from '../events/shared/EventsSharedIndex'
import {IEvents} from './EventsIndex';

@Component({
    templateUrl:'app/events/html/events-list.component.html',
    /*Just to mention that css styles can be added as shown*/
    styles:[],
    styleUrls:[]
})
export class EventsListComponent {
  
    eventsObj:IEvents[]
    constructor(private eventsService:EventsService) {
       this.eventsService.getEvents().subscribe((response:IEvents[])=>this.eventsObj=response);
    }
    
    
    /*handleEventClick(clickData):void{
        console.log('received:',clickData);
    }*/
}