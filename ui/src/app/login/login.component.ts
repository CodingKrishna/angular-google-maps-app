import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  appTitle: string = "";
  /**TODO: 
   * 1) bind the user input data to below variable
   * 2) test login. 
   * 3) in header display user name first letter. */
  userInputDetails:any = {"userName":"", "password":""};

  constructor(private router: Router) { }

  ngOnInit() {
   
  }

  doLogin(){
    let udetails = JSON.stringify(this.userInputDetails);
    localStorage.setItem("userDetails", udetails);
    console.log("udetails");
    this.router.navigate(['../contentpage']);
  }

}
