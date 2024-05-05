import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ParentComponent],
  template:`
  @defer (when value>0; prefetch on idle) {
    <div style="border:2px solid red">
  App Component <br>
  <app-parent></app-parent>
  </div>
  }
  @loading {
    loading...
  }
  `
})
export class AppComponent {
  title = 'DemoApp14';
  value=0;
  ngOnInit(){
    setTimeout(() => {
      this.value=1;
    }, 3000);
  }
}
