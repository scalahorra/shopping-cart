import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { UserInfo } from 'src/app/models/userInfo';

import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logged!: boolean;
  userInfo?: UserInfo;

  constructor(
    private auth: AuthService,
    private sharedService: SharedService,
    private menuCtrl: MenuController
  ) { }

  ngOnInit(): void {
    this.sharedService.getLogged().subscribe( value => {
      this.logged = value;
      console.log(value);
    });
  }

  login(): void {
    this.auth.loginWithGoogle()
      .then( res => {
        this.sharedService.updateLogged(true);
        this.userInfo = {
          photoURL: res.user.photoURL,
          email: res.user.email,
          name: res.user.displayName,
        }
        this.sharedService.updateUserInfo(this.userInfo);
      })
      .catch( error => {
        console.error(error);
      });
  }

  openProfile(): void {
    this.sharedService.updateProfileModal(true);
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
