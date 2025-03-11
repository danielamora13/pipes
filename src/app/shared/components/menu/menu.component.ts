import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'shared-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit{
  menuItems: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
      this.menuItems = [
          { label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Números',
                icon: 'pi pi-dollar',
                routerLink: '/numbers'
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                routerLink: '/uncommon'
              }
            ]
           },
          { label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Custom Pipes',
                icon: 'pi pi-cog',
                routerLink: 'custom'
              }
            ]
           }
      ];
  }
}
