import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDSTNYeJvnSHVcucu3oecaXHYd3tv6fEl0',
      authDomain: 'my-web-6f3ac.firebaseapp.com'
    });
  }
}
