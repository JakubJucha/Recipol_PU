import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-password-form',
  standalone: false,

  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.css'
})
export class PasswordFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router,
              private _toastrService: ToastrService) {
    this.form = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    },{
      validators: this._passwordMatchValidator
    });
  }

  editPassword() {
    const formData = this.form.value;
    delete formData.repeatPassword;

    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    this.http.put(`http://localhost:5266/api/User/me/password`, formData, {headers}).subscribe(res => {
      this._toastrService.success('Pomyślnie zmieniono hasło.');
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    },  error => {
      const errorMessage = error.error?.message || 'Wystąpił nieznany błąd.';
      this._toastrService.error(errorMessage, 'Błąd podczas zmiany hasła.');
      }
    );
  }

  cancel() {
    this.router.navigate(['/profile']);
  }

  private _passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('newPassword')?.value;
    const repeatPassword = control.get('repeatPassword')?.value;

    return password && repeatPassword && password !== repeatPassword
      ? { passwordMismatch: true }
      : null;
  }
}
