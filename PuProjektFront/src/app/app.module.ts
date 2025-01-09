import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {Knob, KnobModule} from 'primeng/knob';
import {FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {Button, ButtonDirective, ButtonModule} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';

@NgModule({
  declarations: [
    AppComponent
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
  ],
  providers: [
    provideAnimationsAsync(),
    KnobModule,
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
