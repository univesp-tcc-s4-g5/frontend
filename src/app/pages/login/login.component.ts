import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loggedUser = this._loginService.getLoggedUser();
  public loginInput = {
    user: '', password: ''
  }

  constructor(
    private _loginService: LoginService
    , private _router: Router
  ) { }

  ngOnInit() {
    if (this.loggedUser) {
      this._router.navigate(['/home']);
    }
  }

  login() {
    this._loginService.login(this.loginInput.user, this.loginInput.password)
      .subscribe((loggedUser: boolean) => {
          if (!loggedUser) {
            return console.error('Login failed');
          }
          this._router.navigate(['/home']);
        });

  }

  navigate() {
    this._router.navigate(['/home']);
  }


}
