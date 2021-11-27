import { GlobalServiceService } from './../../../../services/global-service.service';
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
  @Output() isSuccess: EventEmitter<any>= new EventEmitter(false);

  constructor(private cartService:CartServiceService, private globalService: GlobalServiceService) { }

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
      if(res.success==true){
        this.cartService.sendOtp(sentOtpBody).subscribe((res:any)=>{
          if(res.success==true){
            this.isStep1=false;
            this.isStep2=true;
            this.isDisabled.emit(true);
          }else{
            alert('Error!! Sending OTP Failed. Please refresh the page and try again.');
            return;
          }
        });
      }else{
        alert('Error!! Something went Wrong.');
        return;
      }
    });
  }

  placeQuote(){
    let verifyBody={
      "phone_number": "+91"+this.userDetails.number,
      "code": this.userDetails.otp
    };

    let placeProducts:any=window.localStorage.getItem('infoscart');
    if(placeProducts && placeProducts!='{cart:[]}'){
      placeProducts=JSON.parse(placeProducts);
    }
    let finalPlaceProducts:any=placeProducts.cart.map((n:any)=>{
      return {'name':n.name,'quantity':n.quantity};
    });

    let placeQuoteBody={
      "products_quote":{
        "user_name": this.userDetails.name,
        "phone_number": "+91"+this.userDetails.number,
        "email_id": this.userDetails.email,
        "products": finalPlaceProducts
      }
    };

    this.cartService.verifyOtp(verifyBody).subscribe((res:any)=>{
      if(res.success==true){
        this.cartService.placeQuote(placeQuoteBody).subscribe((res:any)=>{
          if(res.success==true){
            let sendQuoteBody={
              "order_id":res.new_order
            };
            this.cartService.sendQuote(sendQuoteBody).subscribe((res:any)=>{
              if(res.sms_to_customer){
                window.localStorage.setItem('infoscart','{cart:[]}');
                this.globalService.getCartCount();
                this.isSuccess.emit(true);
              }
          });
        }else{
          alert('Error!! Something went wrong. Please refresh the page and try again.');
          return;
        }
        });
      }else{
        alert('Error!! OTP Verification Failled. Please enter the correct OTP.');
        return;
      }
    });
  }

}
