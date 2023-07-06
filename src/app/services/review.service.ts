import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http : HttpClient) { }

  postRev(data : any){
    return this.http.post<any>("http://localhost:3000/review", data)
    .pipe(map((res : any)=>{
      return res;
    }))
  }

  getRev(){
    return this.http.get<any>("http://localhost:3000/review")
    .pipe(map((res : any)=>{
      return res;
    }))
  }
}
