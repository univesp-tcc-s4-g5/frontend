import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  public userInfo = {
    name: '',
    balance: 0,
    answeredQuestions: 0,
    createdQuestions: 0,
    upvotedAnswers: 0,
    favoriteAnswers: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
