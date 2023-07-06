import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { revModel } from './review.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{

  revForm !: FormGroup;
  revObj :revModel = new revModel();
  revData !: any;

  constructor(private formbuilder : FormBuilder, private api:ReviewService){}

  ngOnInit(): void {
    this.revForm = this.formbuilder.group({
      name:[''],
      email:[''],
      review:[''],
      rating:['']
    })
  }

  postRevDetails(){
    this.revObj.name = this.revForm.value.name;
    this.revObj.email = this.revForm.value.email;
    this.revObj.review = this.revForm.value.review;
    this.revObj.rating = this.revForm.value.rating;

    this.api.postRev(this.revObj).subscribe(res => {
      console.log(res);
      alert("Review Saved!!");
      this.revForm.reset();
      this.getRevDetails();
    })
  }

  getRevDetails(){
    this.api.getRev().subscribe(res => {
      this.revData = res;
    })
  }

}
