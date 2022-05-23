import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public username?: string;
  public firstName?: string;
  public lastName?: string;
  public ra?: string;
  public email?: string;
  public password?: string;
  public confirmPassword?: string;

  public courses?: string[];
  public educationalHubs?: string[];

  constructor() { }

  ngOnInit(): void {
  }

  public register() {
    console.log('register');
  }

  validatePassword() {

    if (this.password !== this.confirmPassword) {
      return false;
    }

    if (!this.password || !this.confirmPassword) {
      return false;
    }
    
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return re.test(this.password);

  }

}
