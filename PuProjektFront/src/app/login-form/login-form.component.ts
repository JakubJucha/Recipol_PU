import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private _toastService: ToastrService) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const credentials = this.form.value;
    this.userService.login(credentials).subscribe(
      response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/recipes']);
          this._toastService.success("Pomyślnie zalogowano!")

        } else {
          console.error('Nie otrzymano tokena!');
          this._toastService.error("Błąd podczas logowania!")
        }
      },
      error => {
        this._toastService.error(error.error, "Błąd podczas logowania");
        console.error('Błąd podczas logowania');

      }
    );
  }

}
