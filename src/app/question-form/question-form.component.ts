import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  question:Question = {
    text: '',
    answer: '',
    hide: true
  };

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  addQuestion() {
    this.dataService.addQuestion(this.question);
  }
}
