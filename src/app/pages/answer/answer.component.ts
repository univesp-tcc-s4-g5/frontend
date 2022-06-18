import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  public question = "Estive pensando esses dias, acabei me esquecendo, alguem da comunidade poderia me auxilar nesta duvida cruel?";

  public answers = [
    {
      votes: 99,
      stars: 5,
      createdAt: new Date(),
      content: 'tenho pHD na area e tenho certeza que eh 9',
      userId: '1',
      student: {
        id: '1',
        name: 'John Doe',
        email: '@@@',
        educationalHub: 'santo andre',
        picture: 'assets/images/users/user-1.png',
      }
    },
    {
      votes: 10,
      stars: 5,
      createdAt: new Date(),
      content: 'essa eh dificil, mas eu imagino que seja 22',
      userId: '1',
      student: {
        id: '1',
        name: 'Maria Almeida',
        email: '@@@',
        educationalHub: 'santo andre',
        picture: 'assets/images/users/user-2.png'
      }
    },
    {
      votes: -5,
      stars: 5,
      createdAt: new Date(),
      content: 'nao sei, espero ter ajudado',
      userId: '1',
      student: {
        id: '1',
        name: 'Augusto Silva',
        email: '@@@',
        educationalHub: 'santo andre',
        picture: 'assets/images/users/user-3.png'
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
