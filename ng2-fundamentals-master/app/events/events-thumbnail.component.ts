import {Component,Input,Output,EventEmitter} from '@angular/core'
import {IEvents} from './EventsIndex';

@Component({
    selector:'events-thumbnail',
    template:`
    <div [routerLink]= "['/events',eventComm?.id]" class="well hoverwell thumbnail">
        <h2>{{eventComm?.name | uppercase}}</h2>
        <div>Date: {{eventComm?.date | date:'MM/dd/yyyy'}}</div>
        <div [ngSwitch]="eventComm?.time">
            <span>Time: {{eventComm?.time}}</span>
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: {{eventComm?.price | currency:'USD':true}}</div>
        <div *ngIf="eventComm?.location">
            <span>Location:{{eventComm?.location?.address}}</span>
            <span>&nbsp;</span>
            <span>{{eventComm?.location?.city}}, {{eventComm?.location?.country}}</span>
        </div>
        <div *ngIf="eventComm?.onlineUrl">
            <span>
            OnlineURL: {{eventComm?.onlineUrl}}
            </span>
        </div>
        <!--<button class="btn btn-primary" (click)=handleClickMe()>Click Me</button>
        -->
    </div>`,
    styles:[`
    .thumbnail {min-height:210px}`
    ]
})
export class EventsThumbnail {
  
  @Input() eventComm:IEvents
  
/*This commented out code here deals with passing the data from child component(thumbnail)
  *to the parent component(list)
  *Accessing child componenet variables and methods can also be done using TEMPLATE VARIABLES i.e
  *you create a template variable for the child component as #thumbnail in the parent component
  @Output() eventClick = new EventEmitter();
  
   handleClickMe():void{
      console.log("You Clicked me")
      this.eventClick.emit(this.eventComm.name)
  }*/
        
  display:string = "Hello Angular!!"
        logSome():void{
            console.log("Hi You Did It")
        }
}