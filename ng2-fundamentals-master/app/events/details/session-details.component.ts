import {Component,Input, OnChanges} from '@angular/core'
import {ISession} from '../shared/EventsSharedIndex'


@Component({
    selector:'sessions-list',
    templateUrl:'app/events/details/html/sessions-details.component.html'
    
})
export class SessionDetailsComponent implements OnChanges{
    
  @Input() sessions:ISession[]
  @Input() filterBy:string
  @Input() sortBy:string
  visibleSessions:ISession[]=[]
  
  ngOnChanges(){
    if(this.sessions){
      this.filterSessions(this.filterBy)
      this.sortBy==='name'?this.visibleSessions.sort(this.sortByName):this.visibleSessions.sort(this.sortByVotes)
    }
  }
  filterSessions(filter){
      if(filter==='all'){
          this.visibleSessions=this.sessions.slice(0)
      }
      else{
          this.visibleSessions=this.sessions.filter(session =>session.level.toLowerCase()===filter)
      }
  }
  
  sortByName(s1:ISession,s2:ISession){
      if(s1.name>s2.name) return 1;
      else if(s1.name===s2.name) return 0;
      else return -1
  }
  
  sortByVotes(s1:ISession,s2:ISession){
      return s1.voters.length-s2.voters.length;
  }
  
}