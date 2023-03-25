import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserInfo } from 'src/app/models/userInfo';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent implements OnInit {

  profileModal?: boolean;
  userInfo?: UserInfo;
  subscriptions: Subscription[] = [];

  constructor( private sharedService: SharedService) { }

  ngOnInit(): void {
    const profileModalSubscription = this.sharedService.getProfileModal().subscribe( value => {
      this.profileModal = value;
    });
    this.subscriptions.push(profileModalSubscription);
    const userInfoSubscription = this.sharedService.getUserInfo().subscribe( value => {
      this.userInfo = value;
    });
    this.subscriptions.push(userInfoSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( subscription => subscription.unsubscribe());
  }

  closeModal() {
    this.sharedService.updateProfileModal(false);
  }

  logout() {
    this.sharedService.updateLogged(false);
    this.closeModal();
  }

}
