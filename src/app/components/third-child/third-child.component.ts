import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-third-child',
  standalone: true,
  imports: [FormsModule],
  template: `
    @defer (when dataLenght>0) {
    <div style="border: 6px solid blueviolet;">
      second child's child
      <p>{{ dataLenght }}</p>
    </div>
    <div #trigger>
      On HOVER
    </div>
    @defer (on hover(trigger)) {
      <div>
      On Hover Data
    </div>
    }
    
    } @placeholder {
    <div style="border: 6px solid blueviolet;">
      -------------------
      <p>-------------</p>
    </div>
    }
    @loading {
      Loading...
    }
    
  `,
})
export class ThirdChildComponent {
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
    }, 1000);
  }
}
