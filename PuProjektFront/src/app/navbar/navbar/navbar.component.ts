import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Tu może coś być',
        icon: 'pi pi-home',
        routerLink: '/home',
      },
      {
        label: 'Tu też',
        icon: 'pi pi-star',
        routerLink: '/favorites',
        queryParams: { category: 'stars' },
      },
      {
        label: 'Nawet tu',
        icon: 'pi pi-search',
        routerLink: '/search',
        fragment: 'top',
      },
    ];
  }

}
