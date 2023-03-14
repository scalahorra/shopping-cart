import { Component, ElementRef, ViewChild } from '@angular/core';

import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  profileModal?: boolean;

  @ViewChild('profile', {static: true}) profile?: ElementRef;

  constructor( private sharedService: SharedService) {

    this.sharedService.profileModalSubject.subscribe( profileModal => {
      this.profileModal = profileModal;
    });

  }

  closeModal(profile: any) {
    console.log(this.profile)
    this.sharedService.updateProfile(false);
  }


}
