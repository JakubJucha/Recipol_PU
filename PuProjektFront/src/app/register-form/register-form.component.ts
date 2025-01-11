import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

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
              private _router: Router,
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
    delete formData.repeatPassword;
    console.log(formData);
    this.http.post('http://localhost:5266/api/Auth/register', formData).subscribe(
      response => {
        console.log('Rejestracja zakończona pomyślnie!', response);
        this._toastrService.success("Pomyślnie utworzono konto");
        this._router.navigate(['/login']);
      },
      error => {
        console.error('Błąd podczas rejestracji:', error);
        this._toastrService.error(error.error, "Błąd podczas rejestracji.")
      }
    );
  }
}
