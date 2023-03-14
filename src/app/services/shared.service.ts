import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserInfo } from '../models/userInfo';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  profileModalSubject = new Subject<boolean>();
  profileModal: boolean = false;
  userInfoSubject = new Subject<UserInfo>
  userInfo?: UserInfo;

  constructor() { }

  updateProfile(newProfileModal: boolean) {
    this.profileModal = newProfileModal;
    this.profileModalSubject.next(this.profileModal);
  }

  updateUserInfo(userInfo: UserInfo) {
    this.userInfo = userInfo;
    this.userInfoSubject.next(this.userInfo);
  }

}
