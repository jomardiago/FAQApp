import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questions:Question[];

  constructor(private dataService: DataService) { 
    this.questions = dataService.getQuestions();
  }

  ngOnInit() {
  }

  addQuestion(question:Question) {
    this.dataService.addQuestion(question);
  }

  deleteQuestion(index:number) {
    this.dataService.deleteQuestion(index);
  }
}
