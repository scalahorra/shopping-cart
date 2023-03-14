import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  profileModalSubject = new Subject<boolean>();
  profileModal: boolean = false;

  constructor() { }

  updateProfile(newProfileModal: boolean) {
    this.profileModal = newProfileModal;
    this.profileModalSubject.next(this.profileModal);
  }

}
