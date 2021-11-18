import { CartServiceService } from './../../cart-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'infos-cart-right-panel',
  templateUrl: './cart-right-panel.component.html',
  styleUrls: ['./cart-right-panel.component.scss']
})
export class CartRightPanelComponent implements OnInit {

  isStep1:boolean=true;
  isStep2:boolean=false;
  isStep3:boolean=false;

  userDetails:any={};

  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
  }

  submitUserDetails(){
    let postBody={
        "user_name": this.userDetails.name,
        "email_id": this.userDetails.email,
        "phone_number": "+91"+this.userDetails.number
    }
    this.cartService.saveUserDetails(postBody).subscribe((res:any)=>{

    })
    this.isStep1=false;
    this.isStep2=true;
  }

}
