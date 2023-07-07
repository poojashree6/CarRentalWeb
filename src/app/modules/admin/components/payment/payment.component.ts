import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { paymentModel } from 'src/app/Models/payment.model';

import { PaymentserviceService } from 'src/app/services/paymentservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentForm!:FormGroup;
  paymentModelObj:paymentModel=new paymentModel();
  paymentData!:any[];

  constructor( private paymentservice:PaymentserviceService,private formBuilder:FormBuilder , private router:Router){}
  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
    card:[''],
    expiry:[''],
    cvv:['']
    });
    this.getpayment()
  }


postpayment() {
  console.log(this.paymentForm.value);
  this.paymentModelObj.card = this.paymentForm.value.card;
  this.paymentModelObj.expiry = this.paymentForm.value.expiry;
  this.paymentModelObj.cvv = this.paymentForm.value.cvv;

  this.paymentservice.postpayment(this.paymentModelObj)
    .subscribe(res => {
      console.log(res);
      alert('payment Succesfull')
      // this.paymentForm.reset();
      this.router.navigate(['/admin/rentcar'])
      this.getpayment()
    
    })
}
getpayment() {
  this.paymentservice.getpayment().subscribe(res => {
    this.paymentData = res;
  
  })
}


}