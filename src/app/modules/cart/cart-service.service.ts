import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient) { }

  //SAVE USER DETAILS
  saveUserDetails(data:any){
    return this.http.post('/api/users',data);
  }

  //SEND OTP TO USER
  sendOtp(data:any){
    return this.http.post('/api/sendotp',data);
  }

  //VERIFY OTP
  verifyOtp(data:any){
    return this.http.post('/api/verifyotp',data);
  }

  //PLACE QUOTE TO OWNER
  placeQuote(data:any){
    return this.http.post('/api/placequote',data);
  }

  //SEND QUOTE TO OWNER
  sendQuote(data:any){
    return this.http.post('/api/sendquote',data)
  }
}
