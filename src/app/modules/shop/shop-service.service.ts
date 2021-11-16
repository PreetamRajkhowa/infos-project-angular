import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {

  constructor(private http:HttpClient) { }

  getShopProducts(){
    return this.http.get('/api/products?page=0&limit=100');
  }
}
