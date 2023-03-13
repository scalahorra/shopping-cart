import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  profilePhoto?: string | null;

  constructor( private auth: AuthService) {}

  loginWithGoogle() {
    this.auth.loginWithGoogle()
      .then(res => {
        this.profilePhoto = res.user.photoURL;
        console.log(res);
      })
      .catch(error => {
        console.error(error);
      })
  }

}
