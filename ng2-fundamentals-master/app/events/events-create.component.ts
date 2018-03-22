import {Component} from '@angular/core';
import {Router} from '@angular/router'
import {EventsService} from './shared/EventsSharedIndex';

@Component({
    templateUrl:'app/events/events-create.component.html',
    styles:[`
            em {float:right;color:#E05C65;padding-left:10px;}
            .error input {background-color:#E3C3C5;} 
            .error ::-webkit-input-placeholder { color: #999; }
            .error ::-moz-placeholder { color: #999; }
            .error :-moz-placeholder { color:#999; }
            .error :ms-input-placeholder { color: #999; } 
            `]
})
export class EventsCreateComponent {
    
    isDirty:boolean = true
    constructor(private router:Router,private eventsService:EventsService) {
        
    }
    saveEvent(formValues){
        this.isDirty=false
        this.eventsService.saveEvent(formValues)
        this.router.navigate(['events'])
    }
    cancelCreate(){
        this.router.navigate(['events'])
    }
  
}