import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-first-child',
  standalone: true,
  imports: [],
  template: ` 
  @defer (when dataLenght>0) {
    <div style="border:6px solid orange">
  First Child <br>
  {{dataLenght}}
  </div>
  }
  @placeholder {
    <div style="border:6px solid orange">
  ---------- <br>
 -------------------
  </div>
  }
  `,
})
export class FirstChildComponent {

  dataLenght:number;
  http = inject(HttpClient);
  ngOnInit() {
    setTimeout(() => {
      this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (data) => {
          this.dataLenght = data.length;
        },
      });
    }, 8000);
    
  }
}
