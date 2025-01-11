import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {


  get isLoggedIn() : boolean {
    const token = localStorage.getItem('token');
    return token != null && token.length > 0;
  }

}
