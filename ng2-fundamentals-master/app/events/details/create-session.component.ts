import {Component, OnInit,Output, EventEmitter,Input} from '@angular/core'
import {FormControl,FormGroup, Validators} from '@angular/forms'
import {ISession} from '../shared/events.module';

@Component({
    selector:'create-session',
    templateUrl:'app/events/details/html/create-session.component.html',
    styles:[`
            em {float:right;color:#E05C65;padding-left:10px;}
            .error input, .error select, .error textarea {background-color:#E3C3C5;} 
            .error ::-webkit-input-placeholder { color: #999; }
            .error ::-moz-placeholder { color: #999; }
            .error :-moz-placeholder { color:#999; }
            .error :ms-input-placeholder { color: #999; } 
            `]
})
export class CreateSessionComponent implements OnInit {
    
    sessionForm:FormGroup
    name:FormControl
    presenter:FormControl
    duration:FormControl
    level:FormControl
    abstarcts:FormControl
    
    @Output() saveSessionObj = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()
    
    ngOnInit(){
        this.name=new FormControl('',Validators.required)
        this.presenter=new FormControl('',Validators.required)
        this.duration=new FormControl('',Validators.required)
        this.level=new FormControl('',Validators.required)
        this.abstarcts=new FormControl('',[Validators.required, Validators.maxLength(400),
                                        this.restrictedWords])
        
        this.sessionForm = new FormGroup({
            name:this.name,
            presenter:this.presenter,
            duration:this.duration,
            level:this.level,
            abstarcts:this.abstarcts
        })
    }
    
    restrictedWords(control:FormControl):{[key:string]:any}{
        return control.value.includes('foo')
                ?{'restrictedWord':'foo'}
                : null
    }
    
    saveSession(formValues){
       let sessionObj:ISession={
                id:6,
                name:formValues.name,
                presenter:formValues.presenter,
                duration:formValues.duration,
                level:formValues.level,
                abstracts:formValues.abstarcts,
                voters:[]
        }
        this.saveSessionObj.emit(sessionObj)
    }
    
    cancelCreateSession(){
        this.cancelAddSession.emit()
    }
}