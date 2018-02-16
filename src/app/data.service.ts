import { Injectable } from '@angular/core';
import { Question } from './models/question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
    /* this.questions = [
      { text: 'What is your name?', answer: 'My name is Jose Mari.', hide: true },
      { text: 'What is your favorite color?', answer: 'My favorite color is Green.', hide: true },
      { text: 'What is your favorite language?', answer: 'My favorite language is javascript.', hide: true }
    ] */
  }

  getQuestions() {
    if (localStorage.getItem('questions')) {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    } else {
      this.questions = [];
    }
    return this.questions;
  }

  addQuestion(question:Question) {
    this.questions.unshift(question);
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

  deleteQuestion(index:number) {
    this.questions.splice(index, 1);
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }
}
