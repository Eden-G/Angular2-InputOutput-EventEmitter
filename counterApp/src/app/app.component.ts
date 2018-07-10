import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentCounterValue;

  constructor() {
    this.componentCounterValue = 5;
  }

  updateCounter(newValue: number) {
    console.log(newValue);
    this.componentCounterValue = newValue;
  }

}
