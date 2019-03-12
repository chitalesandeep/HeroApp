import { Component,OnInit } from '@angular/core';
import { Login } from "../login";
import { AuthService } from "../auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit(){ 
  }
  constructor(private route:Router,private authuser:AuthService){
  }
  loginData = new Login();

  goAhead()
  {
    //alert(this.loginData.username);
    const username = this.loginData.username;
    const password = this.loginData.password;

    this.authuser.login(username,password);
    this.checkLogin();
  }

  checkLogin() {

    let ot = this.authuser.isLogedin();
    alert(ot);
      if(ot)
      {
          this.route.navigate(['/home']);
      }
      else
      {
        this.route.navigate(['/login']);
      }
  }
}
