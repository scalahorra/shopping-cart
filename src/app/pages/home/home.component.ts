import { Component } from '@angular/core';

import { UserInfo } from 'src/app/models/userInfo';

import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  profileModal?: boolean;
  userInfo?: UserInfo;

  constructor( private sharedService: SharedService) {

    this.sharedService.profileModalSubject.subscribe( (profileModal: boolean) => {
      this.profileModal = profileModal;
    });

    this.sharedService.userInfoSubject.subscribe( (userInfo: UserInfo) => {
      this.userInfo = userInfo;
    });

  }

  closeModal() {
    this.sharedService.updateProfile(false);
  }


}
