import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {NgModule} from '@angular/core'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {UserProfileComponent,
        LoginComponent,
        UserRoutes} from './UserIndex';

@NgModule({
    imports:[CommonModule,
             FormsModule,
             ReactiveFormsModule,
             RouterModule.forChild(UserRoutes)],
    declarations:[UserProfileComponent,LoginComponent],
    providers:[{
        provide:'canDeactivateUpdateProfile',
        useValue:cancelUpdateProfile
    }]
    
})
export class UserModule{}

function cancelUpdateProfile(userProfile:UserProfileComponent){
    if(userProfile.isDirty)
        return window.confirm("Are you sure you want to quit update?")
    return true    
    
}