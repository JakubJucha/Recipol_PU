import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,

  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  userData: any;

  constructor(private _userService: UserService,
              private http: HttpClient,
              private _toastrService: ToastrService,
              private router: Router) { }


  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload = this._userService.getDecodedToken(token);
      const username = tokenPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      // TODO:  możliwe ze to bedzie po id
      this.getUserData(username);
    }
  }

  editUserData() {
    this.router.navigate(['/editUserData']);
  }

  logOut() {
    localStorage.removeItem('token');
    this._toastrService.success("Pomyślnie wylogowano!");
    this.router.navigate(['/login']);
  }

  // TODO: to bym dal do resolvera
  getUserData(username: string): void {
    const apiUrl = `http://localhost:5168/api/user/detailed-information/${username}`;
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: `${token}`
    };

    this.http.get(apiUrl, { headers }).subscribe(
      (response: any) => {
        this.userData = response;
      },

      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
