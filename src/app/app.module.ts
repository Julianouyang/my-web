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
  MatListModule,
  MatInputModule,
  MatSidenavModule
} from '@angular/material';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { BlogComponent } from './blog/blog.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MyNavComponent,
    BlogComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
