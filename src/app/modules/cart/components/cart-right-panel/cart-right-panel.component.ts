import { CartServiceService } from './../../cart-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  @Output() isDisabled: EventEmitter<any> = new EventEmitter(false);

  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
  }

  submitUserDetails(){
    let postBody={
        "user_name": this.userDetails.name,
        "email_id": this.userDetails.email,
        "phone_number": "+91"+this.userDetails.number
    };

    let sentOtpBody={
      phone_number:"+91"+this.userDetails.number
    };

    this.cartService.saveUserDetails(postBody).subscribe((res:any)=>{
      if(res.user_details.id){
        this.cartService.sendOtp(sentOtpBody).subscribe((res:any)=>{
          if(res.message=='pending'){
            this.isStep1=false;
            this.isStep2=true;
            this.isDisabled.emit(true);
          }
        });
      }
    });
  }

  placeQuote(){
    let verifyBody={
      "phone_number": "+91"+this.userDetails.number,
      "code": this.userDetails.otp
    };

    this.cartService.verifyOtp(verifyBody).subscribe((res:any)=>{
      console.log(res);
    });
  }

}
