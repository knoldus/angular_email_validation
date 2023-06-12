import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-drivien-form',
  templateUrl: './template-drivien-form.component.html',
  styleUrls: ['./template-drivien-form.component.css']
})
export class TemplateDrivienFormComponent implements OnInit {
  isValidFormSubmitted = false;
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  user =  new User()
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  onFormSubmit(form:NgForm){
    this.isValidFormSubmitted = false;
    if(form.invalid){
      return;
    }

    this.isValidFormSubmitted = true;
    this.user = form.value;
    this.userService.createUser(this.user);
    this.user = new User();
    form.resetForm();
  }

}
