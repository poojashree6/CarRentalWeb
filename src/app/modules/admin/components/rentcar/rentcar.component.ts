import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { rentcarModel } from 'src/app/Models/rentcar.model';
import { RentcarserviceService } from 'src/app/services/rentcarservice.service';

@Component({
  selector: 'app-rentcar',
  templateUrl: './rentcar.component.html',
  styleUrls: ['./rentcar.component.css']
})
export class RentcarComponent {
  rentcarForm!:FormGroup;
  rentcarModelObject:rentcarModel=new rentcarModel();
  rentcarData!:rentcarModel[];

  constructor(private rentcarservice:RentcarserviceService, private formbuilder:FormBuilder){}
  ngOnInit(): void {
  this.rentcarForm=this.formbuilder.group({
    name:[''],
    location:[''],
    pick:[''],
    return:[''],
    email:[''],
    password:[''],
    radio:[''],
    
     
  })
  this.getcar();    
}
getcar() {
  this.rentcarservice.getcar().subscribe(res => {
    this.rentcarData = res;
  })
}
poststaff() {
  console.log(this.rentcarForm.value);
  this.rentcarModelObject.name = this.rentcarForm.value.name;
  this.rentcarModelObject.location = this.rentcarForm.value.location;
  this.rentcarModelObject.pick = this.rentcarForm.value.pick;
  this.rentcarModelObject.return = this.rentcarForm.value.return;
  this.rentcarModelObject.email = this.rentcarForm.value.email;
  this.rentcarModelObject.password = this.rentcarForm.value.password;
  this.rentcarModelObject.radio = this.rentcarForm.value.radio;
 
 
  
  this.rentcarservice.postcar(this.rentcarModelObject)
    .subscribe(res => {
      console.log(res);
      alert('car Booked Succesfully')
      this.rentcarForm.reset();
      this.getcar();
    })
}
}
