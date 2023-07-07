import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { paymentModel } from '../Models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {
  
baseurl:string="http://localhost:3000/payment"

  constructor(private http:HttpClient) { }
  
  postpayment(data:any){
    return this.http.post<paymentModel>(this.baseurl,data)
  }
  getpayment() {
    return this.http.get<paymentModel[]>(this.baseurl)
      
  }

}
