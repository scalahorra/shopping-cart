import { Component } from '@angular/core';

import { UserInfo } from 'src/app/models/userInfo';

import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  loggedIn: boolean = false;
  userInfo?: UserInfo;

  constructor(
    private auth: AuthService,
    private sharedService: SharedService
  ) {

  }

  login() {
    this.auth.loginWithGoogle()
      .then( res => {
        console.log(res)
        this.loggedIn = true;
        this.userInfo = {
          photoURL: res.user.photoURL,
          email: res.user.email,
          name: res.user.displayName,
        }
      })
      .catch( error => {
        console.error(error);
      });
  }

  openProfile() {
    this.sharedService.updateProfile(true);
  }

}
