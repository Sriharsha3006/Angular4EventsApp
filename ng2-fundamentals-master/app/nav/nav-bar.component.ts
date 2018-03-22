import {Component} from '@angular/core'
import {AuthService} from '../user/auth.service';
@Component({
    selector:'nav-bar',
    templateUrl:'app/nav/html/nav-bar.component.html'
})
export class NavBarComponent {
  constructor(private auth:AuthService) {
	
}
}