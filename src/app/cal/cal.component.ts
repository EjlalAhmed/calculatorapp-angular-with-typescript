import { Component } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent {
  input: string = '';
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

  onButtonClick(value: string) {
    if (value === '=') {
      this.calculate();
    } else {
      this.input += value;
    }
  }

  calculate() {
    try {
      this.input = eval(this.input);
    } catch (e) {
      this.input = 'Error';
    }
  }

  clear() {
    this.input = '';
  }
}
