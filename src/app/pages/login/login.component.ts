import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private _loginService: LoginService
    , private _router: Router
  ) { }

  login() {
    this.navigate();

  }

  navigate() {
    this._router.navigate(['/home']);
  }


}
