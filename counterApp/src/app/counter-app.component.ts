import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-app',

  template: ` <button (click)= "decrement()"> -  </button>
  {{counter}} <button (click)= "increment()"> +  </button>
  `,
  styles: []
})
export class CounterAppComponent implements OnInit {
  // counter: number;
  @Input() counter: number;
  @Output() counterChange: EventEmitter<number>;
  newVal: number;
  constructor() {
    // this.counter = 3;
    this.counterChange = new EventEmitter();
   }

   increment() {
      // this.counter = this.counter + 1;
      // this.counterChange.emit('this.counter++');
      this.newVal = this.counter + 1;
      this.counterChange.emit(this.newVal);
      return false;
   }

   decrement() {
      // this.counter = this.counter - 1;
      // this.counterChange.emit('this.counter--');
      this.newVal = this.counter - 1;
      this.counterChange.emit(this.newVal);
      return false;
  }
  ngOnInit() {
  }

}
