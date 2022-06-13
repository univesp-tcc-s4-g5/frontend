import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  answers = [
    {
      votes: 99,
      stars: 5,
      createdAt: new Date(),
      content: ' oeaoiresntoiaersntn',
      userId: '1',
      student: {
        id: '1',
        name: 'John Doe',
        email: '@@@',
        educationalHub: 'santo andre',
        picture: 'https://randomuser.me/api/portraits/'
      }
    },
    {
      votes: 99,
      stars: 5,
      createdAt: new Date(),
      content: ' oeaoiresntoiaersntn',
      userId: '1',
      student: {
        id: '1',
        name: 'John Doe',
        email: '@@@',
        educationalHub: 'santo andre',
        picture: 'https://randomuser.me/api/portraits/'
      }
    },
    {
      votes: 99,
      stars: 5,
      createdAt: new Date(),
      content: ' oeaoiresntoiaersntn',
      userId: '1',
      student: {
        id: '1',
        name: 'John Doe',
        email: '@@@',
        educationalHub: 'santo andre',
        picture: 'https://randomuser.me/api/portraits/'
      }
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  vote(answer: any) {
    answer.votes++;
  }


}
