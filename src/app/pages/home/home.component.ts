import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public studentName = 'Aluno';

  constructor(private _router: Router, private loginService: LoginService) { }

  ngOnInit(): void {

  }

  navigate(url: string) {
    this._router.navigate([`/${url}`]);
  }

}
