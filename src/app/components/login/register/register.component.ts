import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login.component.scss']
})
export class RegisterComponent implements OnInit {

  formUser: FormGroup;

  constructor() { }

  ngOnInit() {

    this.formUser = new FormGroup({
      usuario:new FormControl(null , Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null , Validators.required),
      password2:new FormControl(null , Validators.required)
      
    });
  }

}
