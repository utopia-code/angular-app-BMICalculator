import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {

  bmi: number;
  result: string;
  advice: string;

  constructor(private route: ActivatedRoute) {
    this.result = '';
    this.advice = '';
    this.bmi = +route.snapshot.paramMap.get('value');
  }

  ngOnInit() {
    this.getResult();
  }

  getResult() {
    if (this.bmi >= 25) {
      this.result = 'Overweight';
      this.advice = 'You have a higher than normal body weight. Try to exercise more';
    } else if (this.bmi >= 18.5) {
      this.result = 'Normal weight';
      this.advice = 'You have a normal body weight. Good job!';
    } else {
      this.result = 'Underweight';
      this.advice = 'You have a lower than normal body weight. You should eat more.';
    }
  }

}
