import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  createUser(user:User){
    console.log('primaryEmail:' + user.primaryEmail);
     console.log('secondaryEmail:' + user.secondaryEmail);
     console.log('officiaklEmail:' + user.officialEmail);


  }
}
