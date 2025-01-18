import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  profileData: any;

  constructor(private _userService: UserService,
              private http: HttpClient,
              private _toastrService: ToastrService,
              private _route: ActivatedRoute,
              private _router: Router) { }


  ngOnInit(): void {
    this.profileData = this._route.snapshot.data['profileData'];
  }

  initChangePassword() {
    this._router.navigate(['/editPassword']);
  }

  editUserData() {
    this._router.navigate(['/editUserData']);
  }

  logOut() {
    localStorage.removeItem('token');
    this._toastrService.success("Pomyślnie wylogowano!");
    this._router.navigate(['/login']);
  }

}
