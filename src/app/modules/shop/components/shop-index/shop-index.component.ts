import { ShopServiceService } from './../../shop-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ItemDetailsDialogComponent } from '../item-details-dialog/item-details-dialog.component';

@Component({
  selector: 'infos-shop-index',
  templateUrl: './shop-index.component.html',
  styleUrls: ['./shop-index.component.scss']
})
export class ShopIndexComponent implements OnInit {

  shopItems:any=[];
  totalItems!:number;

  constructor(private dialog: MatDialog, private router:Router, private shopService: ShopServiceService) { }

  ngOnInit(): void {
    this.getShopItems();
  }

  getShopItems(){
    this.shopService.getShopProducts().subscribe((res:any)=>{
      console.log(res);
      this.shopItems=res.products;
      this.totalItems=res.total_products;
    });
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
    offer.name=data.title;
    offer.image=data.image_url;
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
    this.router.navigateByUrl('/cart');
  }

}
