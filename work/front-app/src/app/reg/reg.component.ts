import { Component, OnInit } from '@angular/core';

// import {CheckFormService} from "../check-form.service";
// import {AuthService} from "../auth.service";
// import {FlashMessagesService} from "flash-messages-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {



  name: String;
  surname: String;
  age: String;
  email: String;
  password: String;

  constructor(
    // private checkForm: CheckFormService,
    // private flashMessages: FlashMessagesService,
    // private router: Router,
    // private authService: AuthService
    ) {

  }

  ngOnInit(): void {
  }

  userRegisterClick() {
    // const User = {
    //   name: this.name,
    //   login: this.login,
    //   email: this.email,
    //   password: this.password,
    // };

  }
}
