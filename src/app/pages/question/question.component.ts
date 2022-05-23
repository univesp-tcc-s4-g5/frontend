import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/Question';
import { QuestionService } from 'src/app/services/question/question.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';


interface Tag {
  name: string;
}


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  public tags: Tag[] = [];
  public addOnBlur = true;

  public subjects = ['1', '2', '3'];

  public questionInput: Question = {
    id: '',
    title: '',
    description: '',
    subject: '',
    tags: [],
  }

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push({ name: value });
    }

    event.chipInput!.clear();
  }

  removeTag(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  create() {
    const question = this.questionInput as Question;
    this.questionService.create(question).subscribe((data: Question) => {
      console.log(data);
    });

    // return a message to the user

  }

}
