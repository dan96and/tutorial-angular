import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <p>Counter: {{counter}}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decrementBy(1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
    `
})
export class CounterComponent {
  public counter: number = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decrementBy(value: number): void {
    if (this.counter != 0) {
      this.counter -= value;
    }
  }

  resetCounter():void{
    this.counter = 0;
  }
}
