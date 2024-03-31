import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router : Router){

  }

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin =  false

  handleLogin(){
    if(this.username==='hifza'&&this.password==='password')
    {
      this.invalidLogin=false
      this.router.navigate(['welcome' , this.username]) 
    }
    else{
      this.invalidLogin=true
    }
  }
}
