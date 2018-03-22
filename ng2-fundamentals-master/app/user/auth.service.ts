import {Injectable} from '@angular/core'
import {IUser} from './UserIndex';

@Injectable()
export class AuthService {
  
    currentUser:IUser
  
  loginUser(userName:string,password:string){
      this.currentUser={
              id:1,
              userName:'Sriharsha3006',
              firstName:'Sriharsha',
              lastName:'Bopparaju'
      }
  }
    
    isAuthenticated(){
        return !!this.currentUser;
    }
    
    updateProfile(firstName:string,lastName:string){
        this.currentUser.firstName=firstName
        this.currentUser.lastName=lastName
    }
}