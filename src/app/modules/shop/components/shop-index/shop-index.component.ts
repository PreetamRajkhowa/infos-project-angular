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
        "id":1,
        "name":"Shirt",
        "img":"https://res.cloudinary.com/vantagecircle/image/upload/v1634811825/prod/giftvoucherdeals/37309_Orange1.png",
        "description":"Achieve the maximum speed possible on the Web Platform today, and take it further, via WebWorkers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model."
      },
      {
        "id":2,
        "name":"Shirt",
        "img":"https://res.cloudinary.com/vantagecircle/image/upload/v1634811825/prod/giftvoucherdeals/37309_Orange1.png",
        "description":"Achieve the maximum speed possible on the Web Platform today, and take it further, via WebWorkers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model."
      },
      {
        "id":3,
        "name":"Shirt",
        "img":"https://res.cloudinary.com/vantagecircle/image/upload/v1634811825/prod/giftvoucherdeals/37309_Orange1.png",
        "description":"Achieve the maximum speed possible on the Web Platform today, and take it further, via WebWorkers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model."
      },
      {
        "id":4,
        "name":"Shirt",
        "img":"https://res.cloudinary.com/vantagecircle/image/upload/v1634811825/prod/giftvoucherdeals/37309_Orange1.png",
        "description":"Achieve the maximum speed possible on the Web Platform today, and take it further, via WebWorkers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model."
      }
    ]
    this.checkForInCart();
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


  addToCart(data:any){
    let cart:any;
    let offer:any={};
    let check=window.localStorage.getItem('cart');
    if(check && check!='{cart:[]}'){
      cart=JSON.parse(check);
    }else{
      cart={cart:[]};
    }
    offer.id=data.id;
    offer.name=data.name;
    offer.image=data.img;
    offer.quantity=1;
    cart.cart.push(offer);
    console.log(cart);
    window.localStorage.setItem('cart',JSON.stringify(cart));
    this.checkForInCart();
  }

  checkForInCart(){
    let deals:any=window.localStorage.getItem('cart');
    let tempArray=[];
    if(deals && deals!='{cart:[]}'){
     deals=JSON.parse(deals);
    }else{
      deals={cart:[]};
    }
    if(deals.cart.length){
      for(let cartItem of deals.cart){
          tempArray.push(cartItem.id);
      }
      for(let offer of this.shopItems){
        if(tempArray.includes(offer.id)){
          offer.isInCart=true;
        }else{
          offer.isInCart=false;
        }
      }
    }
    console.log(this.shopItems);
  }

  goToCart(){

  }

}
