import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  

  questions = [
    {
      id: '1',
      title: 'Qual a raiz quadrada de 81?',
      description: 'Estive pensando esses dias, acabei me esquecendo, alguem da comunidade poderia me auxilar nesta duvida cruel?',
      subject: '',
      tags: ['calculo', 'operacoes'],
    },
    {
      id: '2',
      title: 'What is the name of the main character in the game?',
      description: ' this is a question about the game',
      subject: '',
      tags: ['a', 'b']
    },
    {
      id: '3',
      title: 'What is the name of the main character in the game?',
      description: ' this is a question about the game',
      subject: '',
      tags: [ 'a']

    }
  ];
      


  constructor() { }

  ngOnInit(): void {
  }

  search(search: string) {
    console.log(search);
  }

}
