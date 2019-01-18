import { User } from './../../models/user.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { }

  ngOnInit() {
  }

}
