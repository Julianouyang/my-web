import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,

  MatInputModule,
  MatSidenavModule,
  MatDialogModule,
  MatTooltipModule,
  MatDividerModule
} from '@angular/material';

import {
  MatListModule,
} from '@angular/material/list';
import { MyNavComponent } from './my-nav/my-nav.component';
import { BlogComponent } from './blog/blog.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    BlogComponent,
    HomePageComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatSidenavModule,
    MatDialogModule,
    MatTooltipModule,
    MatDividerModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [SigninComponent]
})
export class AppModule { }
