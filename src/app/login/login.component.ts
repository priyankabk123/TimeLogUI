import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string ='';
  password: string = '';
  errorMessage: string = '';

  //set static creds
  private staticUsername = 'Priya';
  private staticPassword = 'Demo@123';

  constructor (private router : Router, private apiService : APIService){}

  login(){
    //Static
    /*if(this.username == this.staticUsername && this.password == this.staticPassword){
      this.router.navigate(['NavBar'])
    }else{
      this.errorMessage = 'Invalid username or password'; 
    }*/

    //Using api
    const credentials = { username : this.username, password : this.password}
    console.log(credentials)
    this.apiService.login(credentials).subscribe({
      
      next: (Response) => {
        console.log("Login Succesfull"+ Response);
        this.router.navigate(['NavBar']);
      },
      error: (err)=>{
        console.log("Failed ", err);
        this.errorMessage='Invalid username or password'; 
      }
    })
  }

}
