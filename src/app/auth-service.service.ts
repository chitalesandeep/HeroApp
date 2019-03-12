import { Injectable } from '@angular/core';
//import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(uname,upassword)
  {
    if(uname == "admin" && upassword == "1212")
    {
        localStorage.setItem('Name',uname); 
    }
    else
    {
        this.logout();
    }
  }

  logout()
  {
    localStorage.removeItem('Name');
    localStorage.clear();
  }

  isLogedin()
  {
    let user = localStorage.getItem('Name');

    if(user)
      return true;
       
      return false;
  }

}
