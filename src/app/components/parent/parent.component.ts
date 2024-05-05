import { Component } from '@angular/core';
import { FirstChildComponent } from '../first-child/first-child.component';
import { SecondChildComponent } from '../second-child/second-child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FirstChildComponent,SecondChildComponent],
  template:`
  <div style="border: 6px solid green;">
  Parent Component <br>
@defer (on immediate) {
  <app-first-child></app-first-child>
  <app-second-child></app-second-child>
}
  </div>
  `
})
export class ParentComponent {

}
