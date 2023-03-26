import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/models/userInfo';
import { DatabaseService } from 'src/app/services/database.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userInfo!: UserInfo;

  products: any[] = [
    {name: 'manzanas', description: 'manzanas baratas y verdes como los bosques'},
    {name: 'merluza', description: 'merluza fresca sacada de los frios mares de noruega'},
    {name: 'kepchup', description: 'kepchup exprimido de los tomates más frescos del campo'}
  ];

  constructor(
    private database: DatabaseService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.getUserInfo().subscribe( value => {
      this.userInfo = value;
    });
  }

  sendCollection() {
    if(this.userInfo) {
      const product = {
        name: 'mortadela',
        photo: 'www.google.es/aaasasgrjdfgnsfa',
        description: 'la mejor mortadelo de aragón y alrededores'
      }
      this.database.addProduct(this.products, this.userInfo.email!);
    }
  }

  getCollection() {
    if(this.userInfo) {
      this.database.getProducts(this.userInfo.email!).subscribe( products => {
        console.log(products);
      });
    }
  }

  getUsers() {
    const users = this.database.getAllUsers();
    console.log(users);
  }
}
