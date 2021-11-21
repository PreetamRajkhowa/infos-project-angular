import { GlobalServiceService } from './../../services/global-service.service';
import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'infos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartCount!:number;

  constructor(private globalService: GlobalServiceService) { }

  ngOnInit(): void {
    this.globalService.cartCount.subscribe((res:number)=>{
      this.cartCount=res;
    });
  }

  closeSideNav(){
    $('#mySidenav').css('width','0px');
  }

  openSideNav(){
    $('#mySidenav').css('width','250px');
  }

}
