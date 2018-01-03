import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ],
  declarations: [LoginComponent, HeaderComponent, NotFoundComponent],
  exports: [
    RouterModule,
    HeaderComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ]
})
export class CoreModule { }
