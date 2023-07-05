import { Component,OnInit  } from '@angular/core';
import { ServiceService } from '../service/service.service';
import {  Productos } from '../interface/interface';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
ArregloProducto: Productos[]=[];

   constructor ( private getProduct:ServiceService) {
    ;
   }
    
   ngOnInit(){
    this.getProduct.getinfoApi().subscribe(ShowApiProducts=>{
      console.log(ShowApiProducts)
    this.ArregloProducto=ShowApiProducts
    })
  }
  }