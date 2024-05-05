import { Component, inject } from '@angular/core';
import { ThirdChildComponent } from '../third-child/third-child.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second-child',
  standalone: true,
  imports: [ThirdChildComponent],
  template:`
  @defer (when dataLenght>0) {
    <div style="border: 6px solid blue;">
  Second Child <br>
  {{dataLenght/2}}
  <br>
  <app-third-child></app-third-child>
  </div>
  }
  @placeholder {
    <div style="border: 6px solid blue;">
  ------------ <br>
  --------
  <br>
  <div style="border: 6px solid blueviolet;">
      ------------------
      <p>--------------</p>
    </div>
  </div>
  }
  `
})
export class SecondChildComponent {
  dataLenght = 0;
  http = inject(HttpClient);
  ngOnInit() {
    setTimeout(() => {
      this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/photos')
      .subscribe({
        next: (data) => {
          this.dataLenght = data.length;
        },
      });
    }, 4000);
  }
}
