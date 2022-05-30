import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUser } from 'src/app/models/LoggedUser';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuClicked = new EventEmitter<void>();

  public loggedUser?: LoggedUser;
  public show = true;
  public menuOpened = false;

  // create an event emmiter to pass the value to the parent component
  public toggleMenu() {
    this.menuClicked.emit();

  }

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
