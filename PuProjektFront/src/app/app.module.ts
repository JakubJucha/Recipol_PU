import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {Knob, KnobModule} from 'primeng/knob';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {Button, ButtonDirective, ButtonModule} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import {Menubar} from 'primeng/menubar';
import {Badge} from 'primeng/badge';
import {Avatar} from 'primeng/avatar';
import {NgOptimizedImage} from '@angular/common';
import {InputText} from 'primeng/inputtext';
import { ProfileComponent } from './profile/profile.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {FloatLabel} from 'primeng/floatlabel';
import {Password} from 'primeng/password';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {MatAnchor} from "@angular/material/button";
import { PasswordFormComponent } from './password-form/password-form.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import {Select} from 'primeng/select';
import {Checkbox} from 'primeng/checkbox';
import {DataView} from 'primeng/dataview';
import {ScrollPanel} from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    LoginFormComponent,
    RegisterFormComponent,
    PasswordFormComponent,
    RecipesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MatSlideToggle,
    Knob,
    FormsModule,
    Button,
    ButtonDirective,
    Ripple,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    Menubar,
    Badge,
    Avatar,
    NgOptimizedImage,
    InputText,
    ReactiveFormsModule,
    FloatLabel,
    Password,
    HttpClientModule,
    MatAnchor,
    Select,
    Checkbox,
    DataView,
    ScrollPanel,
  ],
  providers: [
    provideAnimationsAsync(),
    KnobModule,
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
