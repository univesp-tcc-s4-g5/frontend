import { Injectable } from '@angular/core';
import { Question } from 'src/app/interfaces/Question';
import { BaseService } from '../base-service.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseService<Question> {


}
