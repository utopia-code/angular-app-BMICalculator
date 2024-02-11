import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {

  age = 25;
  weight = 60;
  height = 170;
  sex = 'male';

  constructor(private router: Router) {}

  changeHeight(event: any) {
    this.height = event.target.value;
  }

  male() {
    this.sex = 'male';
  }

  female() {
    this.sex = 'female';
  }

  calculateBMI() {
    const BMI = this.weight / Math.pow(this.height/ 100, 2);
    this.router.navigate(['/result',  BMI.toFixed(1)]);
  }
}
