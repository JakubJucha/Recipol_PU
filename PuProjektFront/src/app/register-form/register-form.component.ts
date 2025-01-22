import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: false,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup;
  mode: string  = 'REGISTER';
  header: string = '';

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private _router: Router,
              private route: ActivatedRoute,
              private _toastrService: ToastrService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]]
    }, {
      validators: this._passwordMatchValidator
    });
  }

ngOnInit() {
  this.mode = this.route.snapshot.data['mode'];
  this._readData();
  this._adjustFormValidators();
}

isRegisterMode() {
    return this.mode == 'REGISTER';
}

  editData() {
    const formData = this.form.value;
    delete formData.repeatPassword;
    delete formData.password;

    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    this.http.put(`http://localhost:5266/api/User/me`, formData, {headers}).subscribe(
      res => {
        this._toastrService.success('Pomyślnie zedytowano dane użytkownika.');
        this._router.navigate(['/profile']);
    },
      error => {
        this._toastrService.error(error.error, 'Błąd podczas edycji danych użytkownika.');
      }
    );
  }

  register() {
    const formData = this.form.value;
    delete formData.repeatPassword;
    this.http.post('http://localhost:5266/api/Auth/register', formData).subscribe(
      response => {
        this._toastrService.success("Pomyślnie utworzono konto");
        this._router.navigate(['/login']);
      },
      error => {
        const errorMessage = error.error?.message || 'Wystąpił nieznany błąd.';
        this._toastrService.error(errorMessage, "Błąd podczas rejestracji.")
      }
    );
  }

  cancel() {
    this._router.navigate(['/recipes']);
  }

  private _readData() {
    if (this.isRegisterMode()) {
      this.header = 'Zarejestruj się'
    } else {
      this.header = 'Edytuj dane'
      this._getUserData();
    }
  }

  private _getUserData() {
    const apiUrl = `http://localhost:5266/api/User/me`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    this.http.get<any>(apiUrl, { headers }).subscribe(res => {
       this.form.controls['name'].setValue(res.name);
       this.form.controls['surname'].setValue(res.surname);
       this.form.controls['email'].setValue(res.email);
    })
  }

  private _adjustFormValidators() {
    if (this.isRegisterMode()) {
      this.form.get('password')?.setValidators([Validators.required]);
      this.form.get('repeatPassword')?.setValidators([Validators.required]);
      this.form.setValidators(this._passwordMatchValidator);
    } else {
      this.form.get('password')?.clearValidators();
      this.form.get('repeatPassword')?.clearValidators();
      this.form.setValidators(null);
    }
    this.form.updateValueAndValidity();
  }

  private _passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const repeatPassword = control.get('repeatPassword')?.value;

    return password && repeatPassword && password !== repeatPassword
      ? { passwordMismatch: true }
      : null;
  }

}
