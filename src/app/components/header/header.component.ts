import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUser } from 'src/app/models/LoggedUser';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedUser?: LoggedUser;
  public show = true;

  constructor(private loginService: LoginService
    , private router: Router) { }

  ngOnInit(): void {
    this.loggedUser = this.loginService.getLoggedUser();
    if (!this.loggedUser) {
      console.log('No user logged in');
      // this.show = false;
      return;
    }
    this.show = true;
  }

}
