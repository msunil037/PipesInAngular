import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  today = new Date();
  a: number = 0.259;
  b: number = 1.3495;
  pi: number = 3.14159265359;
  value!: string;
  change(value: string) {
    this.value = value;
  }
}
