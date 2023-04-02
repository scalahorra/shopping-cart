import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menuItem';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor( private sharedService: SharedService ) {}

  ngOnInit(): void {

    this.sharedService.getMenuOptions().subscribe( res => {
      this.menuItems = res;
    });

  }

}
