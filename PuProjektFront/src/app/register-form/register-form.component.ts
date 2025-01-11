import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register-form',
  standalone: false,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private _toastrService: ToastrService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const repeatPassword = form.get('repeatPassword')?.value;
    if (password && repeatPassword && password !== repeatPassword) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  register() {
    const formData = this.form.value;
    console.log(formData);
    this.http.post('http://localhost:5168/api/authorize/register', formData).subscribe(
      response => {
        console.log('Rejestracja zakończona pomyślnie!', response);
        this._toastrService.success("Pomyślnie utworzono konto");

      },
      error => {
        console.error('Błąd podczas rejestracji:', error);
        this._toastrService.error(error.error, "Błąd podczas rejestracji.")
      }
    );
  }
}
