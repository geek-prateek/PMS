import { Component } from '@angular/core';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.component.html',
  styles: [
    `
      .bi{
          font-size: 25px;
      }
    `,
  ],
})
export class CelebrationComponent {
  month: string = 'January'; 
  constructor() {}
  ngOnInit() {}
}
