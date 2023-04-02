import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { UserInfo } from '../models/userInfo';
import { MenuItem } from '../models/menuItem';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private profileModal = new BehaviorSubject<boolean>(false);
  private userInfo = new Subject<UserInfo>();
  private logged = new BehaviorSubject<boolean>(false);

  constructor( private http: HttpClient ) { }

  getLogged(): Observable<boolean> {
    return this.logged.asObservable();
  }
  updateLogged( value: boolean ) {
    this.logged.next(value);
  }

  getProfileModal(): Observable<boolean> {
    return this.profileModal.asObservable();
  }
  updateProfileModal( value: boolean ): void {
    this.profileModal.next(value);
  }

  getUserInfo(): Observable<UserInfo> {
    return this.userInfo.asObservable();
  }
  updateUserInfo( value: UserInfo ): void {
    this.userInfo.next(value);
  }

  getMenuOptions(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>('assets/data/menu.json');
  }

}
