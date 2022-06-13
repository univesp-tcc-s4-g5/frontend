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
      title: 'What is the name of the main character in the game?',
      description: ' this is a question about the game',
      subject: '',
      tags: ['a', 'b', 'c'],
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
