import { Injectable } from '@angular/core';
import { rentcarModel } from '../Models/rentcar.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RentcarserviceService {
 
  baseurl:string="http://localhost:3000/rentcar"

  //loacl variable http referring to httpclient instance

  constructor(private http:HttpClient) { }    
  
  getcar() {
    return this.http.get<rentcarModel[]>(this.baseurl)
      
  }

  postcar(data: any) {
    return this.http.post<rentcarModel>(this.baseurl, data)
      
  }
}
