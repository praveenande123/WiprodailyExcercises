import { Component } from '@angular/core';
import { UserService } from '../../app/service/userservice';
import { User } from '../../interfaces/user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {  TokenData } from '../../interfaces/token';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  user:User={
    email:"",
    name:"",
    passWord:""
  }

  jwttoken:TokenData={
    token:""
  }
  constructor(private userService:UserService, private router:Router)
  {}



  login() {

    console.log("email="+this.user.email);
    console.log("password="+this.user.passWord);
    this.userService.login(this.user).subscribe((data)=>{

        this.jwttoken=data;

        let tokenvalue=this.jwttoken.token;
        localStorage.setItem("token",tokenvalue);
        //console.log(this.jwttoken.token)
        this.router.navigate(["/movielist"])


    })
  }

}