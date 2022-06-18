import { Component, OnInit } from '@angular/core';

interface Ranking {

  position: number;
  name: string;
  points: number;
}


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public displayedColumns: string[] = ['position', 'name', 'points'];

  public userPosition: number = 19;

  public dataSource: Ranking[] = [{
    position: 1,
    name: 'Max',
    points: 2
  },
  {
    position: 2,
    name: 'Manu',
    points: 1
  },
  {
    position: 3,
    name: 'Anna',
    points: 3
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
