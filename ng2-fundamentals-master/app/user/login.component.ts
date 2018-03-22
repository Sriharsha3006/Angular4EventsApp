import {Component} from '@angular/core'
import {AuthService} from '../user/auth.service'
import {Router} from '@angular/router';


@Component({
    templateUrl:'app/user/login.component.html'
})
export class LoginComponent {
    
    constructor(private authService:AuthService, private router:Router) {
	
}
    
    login(loginForm){
        console.log(loginForm)
        this.authService.loginUser(loginForm.userName, loginForm.password)
        this.router.navigate(['events'])
    }
}