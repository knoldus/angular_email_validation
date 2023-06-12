import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
   selector: 'app-reactive',
   templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  isValidFormSubmitted = null;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  userForm = this.formBuilder.group({
     primaryEmail: ['', [Validators.required ,Validators.pattern(this.emailPattern)]],
     secondaryEmail:[ '',[Validators.required , Validators.pattern(this.emailPattern)]],
     officialEmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]],


//     primaryEmail: ['', [Validators.required ,Validators.email =""^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$""]],
//      secondaryEmail:[ '',[Validators.required , Validators.email]],
//      officialEmail: ['', [Validators.required, Validators.email]],
  });


  user = new User();
  constructor(private formBuilder:FormBuilder, private userService: UserService) {
  }
  ngOnInit() {
	 
  }
  onFormSubmit() {
     this.isValidFormSubmitted = false;
     if (this.userForm.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.user = this.userForm.value;
     this.userService.createUser(this.user);
     this.userForm.reset();
  }
  get primaryEmail() {
     return this.userForm.get('primaryEmail');
  }
  get secondaryEmail() {
     return this.userForm.get('secondaryEmail');
  }  
  get officialEmail() {
     return this.userForm.get('officialEmail');
  }    
} 