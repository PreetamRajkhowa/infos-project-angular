import { ShopServiceService } from './../../../shop/shop-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'infos-newly-added',
  templateUrl: './newly-added.component.html',
  styleUrls: ['./newly-added.component.scss']
})
export class NewlyAddedComponent implements OnInit {

  latestProducts:any=[];

  constructor(private router:Router, private shopService:ShopServiceService) { }

  ngOnInit(): void {
    this.getNewProducts();
  }

  Navigate(){
    this.router.navigateByUrl('/shop');
  }

  getNewProducts(){
    this.shopService.getLatestProducts().subscribe((res:any)=>{
      this.latestProducts=res.products;
    });
  }

}
