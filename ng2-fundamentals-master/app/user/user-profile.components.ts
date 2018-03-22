import {Component,OnInit} from '@angular/core'
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {AuthService} from '../user/auth.service'
import {Router} from '@angular/router'

@Component({
    templateUrl:'app/user/user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
 
    profileForm:FormGroup
    isDirty:boolean
    
    constructor(private auth:AuthService,private router:Router) {
	
}
    
    ngOnInit(){
        this.isDirty=true
        let firstName = new FormControl(this.auth.currentUser.firstName)
        let lastName = new FormControl(this.auth.currentUser.lastName)
        this.profileForm = new FormGroup({
            firstName:firstName,
            lastName:lastName
        })
    }
    
    saveProfile(profileForm){
        console.log(profileForm.firstName)
        this.isDirty=false;
        this.auth.updateProfile(profileForm.firstName, profileForm.lastName)
        this.router.navigate(['events'])
    }
    
    cancelUpdate(){
        this.router.navigate(['events'])
    }
}