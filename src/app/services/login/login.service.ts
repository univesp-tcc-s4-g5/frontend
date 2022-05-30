import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoggedUser } from 'src/app/models/LoggedUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public static user: LoggedUser;

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    username = username.toLowerCase();
    if (username === 'admin' && password === 'admin') {
      LoginService.user = new LoggedUser('admin', 'email@email.com', '1234678', new Date(), true);
      return of(true);
    }
    return of(false);
  }

  logout(): void {
    console.log('logout');
  }

  // check if the user is logged

  getLoggedUser(): LoggedUser {
    return LoginService.user;
  }

  isAuthenticated(): boolean {
    return LoginService.user != null;
  }

}
