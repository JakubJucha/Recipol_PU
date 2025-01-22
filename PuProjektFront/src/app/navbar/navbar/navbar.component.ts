import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] | undefined;
  profileData: any;
  profileVisible: boolean = false;
  buttonItems: MenuItem[] | null = null;
  constructor(private _router: Router,
              private _toastrService: ToastrService,
              private _http: HttpClient,) { }

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
    this.buttonItems = [
      {
        label: 'Edytuj profil',
        icon: 'pi pi-pencil',
        command: () => {
          this.editUserData();
        },
      },
      {
        label: 'Edytuj hasło',
        icon: 'pi pi-refresh',
        command: () => {
          this.initChangePassword();
        },
      },
    ];
    this._getUserData();
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

  private _getUserData() {
  const apiUrl = `http://localhost:5266/api/User/me`;
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    this._http.get(apiUrl, { headers }).subscribe(
      response => {
        this.profileData = response;
      },
      error => {
        const errorMessage = error.error?.message || 'Wystąpił nieznany błąd.';
        this._toastrService.error(errorMessage, 'Błąd podczas pobierania danych użytkownika.');
      }
    )
  }

}
