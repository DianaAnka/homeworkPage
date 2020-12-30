import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  answer: string = '';
  constructor() {}

  ngOnInit(): void {}

  //  get the answer from the child at each press

  pressKey(key: string) {
    if (key == 'x') {
      this.answer = this.answer.substr(0, this.answer.length - 1);
    } else if (key == 'clear') {
      this.answer = '';
    } else {
      this.answer += key;
    }
  }
}
