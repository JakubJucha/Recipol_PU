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
        label: 'Przepisy',
        icon: 'pi pi-list',
        routerLink: '/recipes',
      },
      {
        label: 'Składniki',
        icon: 'pi pi-shopping-bag',
        routerLink: '/ingredients',
      },
    ];
  }

}
