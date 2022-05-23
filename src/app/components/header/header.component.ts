import { Component, OnInit } from '@angular/core';
import { LoggedUser } from 'src/app/models/LoggedUser';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedUser?: LoggedUser;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loggedUser = this.loginService.getLoggedUser();
  }

}
