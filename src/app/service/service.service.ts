import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos, RootObject } from '../interface/interface';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) { }
  
  getinfoApi (){
    return this.http.get<Productos[]>("https://fakestoreapi.com/products")
    
  }
}  
