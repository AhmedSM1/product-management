import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: any[];

  constructor(private http: HttpClient) { }


  getFromJson(){
      return this.http.get("assets/products.json");
    }

  
 


}
export interface Product {
  name: string;
  price: number;
  catagory: String;
  pic: String
}