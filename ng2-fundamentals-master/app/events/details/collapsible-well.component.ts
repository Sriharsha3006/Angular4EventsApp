import {Component,Input} from '@angular/core';

@Component({
    selector:'collapsible-well',
    template:`
        <div (click)=toggleSession() class="well pointable">
            <h4 class="well-title">{{title}}</h4>
            <ng-content *ngIf="!visible"></ng-content>
        </div>
        
    `,
})
export class CollapsibleWellComponent {
  
    @Input() title:string
    private visible:boolean=true
    
    toggleSession(){
        this.visible= !this.visible
    }
}