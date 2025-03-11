import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  standalone: false,
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {
  public totalSales: number = 2767789.5567
  public percent: number = 0.4876
}
