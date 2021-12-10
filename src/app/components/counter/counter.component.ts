import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent {

  public counter = 0;

  public increment(): void { this.counter++; }
  public decrement(): void { this.counter--; }

}
