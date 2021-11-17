import { GlobalServiceService } from './../../../../services/global-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'infos-cart-index',
  templateUrl: './cart-index.component.html',
  styleUrls: ['./cart-index.component.scss']
})
export class CartIndexComponent implements OnInit {

  cartItems:any=[];

  constructor(private globalService:GlobalServiceService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(){
    let check:any=window.localStorage.getItem('cart');
    let cart:any;
    if(check && check!='{cart:[]}'){
      cart=JSON.parse(check);
      this.cartItems=cart.cart;
    }
    console.log(this.cartItems);
  }

  changeQuantity(data:any,type:number){
    if(type==1){
      if(data.quantity>1){
        this.cartItems.forEach((m:any)=>{
          if(m.id==data.id){
            m.quantity--;
          }
        });
        window.localStorage.setItem('cart',JSON.stringify({cart:this.cartItems}));
      }
    }else{
      this.cartItems.forEach((m:any)=>{
        if(m.id==data.id){
          m.quantity++;
        }
      });
      window.localStorage.setItem('cart',JSON.stringify({cart:this.cartItems}));
    }
  }

  removeFromCart(item:any){
    this.cartItems.forEach((m:any, index:any)=>{
      if(m.id==item.id){
        this.cartItems.splice(index,1);
      }
    });
    window.localStorage.setItem('cart',JSON.stringify({cart:this.cartItems}));
    this.globalService.getCartCount();
  }

}
