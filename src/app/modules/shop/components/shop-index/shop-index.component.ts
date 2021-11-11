import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemDetailsDialogComponent } from '../item-details-dialog/item-details-dialog.component';

@Component({
  selector: 'infos-shop-index',
  templateUrl: './shop-index.component.html',
  styleUrls: ['./shop-index.component.scss']
})
export class ShopIndexComponent implements OnInit {

  shopItems!:any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getShopItems();
  }

  getShopItems(){
    this.shopItems=[
      {
        "name":"Shirt",
        "img":"https://res.cloudinary.com/vantagecircle/image/upload/v1634811825/prod/giftvoucherdeals/37309_Orange1.png",
        "description":"Achieve the maximum speed possible on the Web Platform today, and take it further, via WebWorkers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model."
      },
      {
        "name":"Shirt",
        "img":"https://res.cloudinary.com/vantagecircle/image/upload/v1634811825/prod/giftvoucherdeals/37309_Orange1.png",
        "description":"Achieve the maximum speed possible on the Web Platform today, and take it further, via WebWorkers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model."
      },
      {
        "name":"Shirt",
        "img":"https://res.cloudinary.com/vantagecircle/image/upload/v1634811825/prod/giftvoucherdeals/37309_Orange1.png",
        "description":"Achieve the maximum speed possible on the Web Platform today, and take it further, via WebWorkers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model."
      },
      {
        "name":"Shirt",
        "img":"https://res.cloudinary.com/vantagecircle/image/upload/v1634811825/prod/giftvoucherdeals/37309_Orange1.png",
        "description":"Achieve the maximum speed possible on the Web Platform today, and take it further, via WebWorkers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model."
      }
    ]
  }

  openDialog(name:string,itemData:string) {
    const dialogRef=this.dialog.open(ItemDetailsDialogComponent, {
      height: '300px',
  width: '600px',
      data: {
        name:name,
        description: itemData,
      },
    });
  }

}
