import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  cartCount: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  loadInBootstrap(){
    this.getCartCount();
  }

  getCartCount(){
    let check=window.localStorage.getItem('cart');
    let cart:any;
    if(check && check!='{cart:[]}'){
      cart=JSON.parse(check);
      this.cartCount.next(Number(cart.cart.length));
    }else{
      this.cartCount.next(Number(0));
    }
  }
}
