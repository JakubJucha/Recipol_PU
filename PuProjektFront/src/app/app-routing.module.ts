import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {ProfileDataResolver} from './resolvers/user-data.resolver';
import {PasswordFormComponent} from './password-form/password-form.component';

const routes: Routes = [
  { path: 'profile',
    component: ProfileComponent,
    resolve: {
    profileData: ProfileDataResolver,
    },
  },
  {path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegisterFormComponent, data: { mode: 'REGISTER' } },
  { path: 'editUserData', component: RegisterFormComponent, data: { mode: 'EDIT' } },
  { path: 'editPassword', component: PasswordFormComponent, },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
