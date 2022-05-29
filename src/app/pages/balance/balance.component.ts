import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  public balance: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
