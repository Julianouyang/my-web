import { AuthService } from './../auth/auth.service';
import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { SigninComponent } from '../auth/signin/signin.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSignin() {
      const dialogRef = this.dialog.open(SigninComponent, {
        width: '300px',
        height: '270px',
        data: {
          email: '',
          password: undefined
        }
      });

      dialogRef.afterClosed().subscribe((result: User) => {
        if (result !== undefined && result.email && result.password) {
          this.authService.signinUser(result.email, result.password);
        }
      });
  }

  onSignout() {
    this.authService.signoutUser();
  }

}
