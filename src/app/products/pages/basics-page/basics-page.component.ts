import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  standalone: false,
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'daniela';
  public nameUpper: string = 'DANIELA';
  public fullName: string = 'DaNiElA';

  public customDate: Date = new Date();
}
