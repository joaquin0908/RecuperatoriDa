import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Productos } from 'src/app/interface/interface';
@Component({
  selector: 'app-detalles-productos',
  templateUrl: './detalles-productos.page.html',
  styleUrls: ['./detalles-productos.page.scss'],
})
export class DetallesProductosPage implements OnInit {
ProductoId:any;
Producto!:Productos;
  constructor(private http:HttpClient,private route:ActivatedRoute) { 
  }
//se recibe un id y dependiendo del id se cargan los valores o los datos del producto, previamente cargados en la interfaz, 
  ngOnInit() {
   this.route.params.subscribe(({productoId})=>
    {console.log(productoId)
     this.http.get<Productos>("https://fakestoreapi.com/products/"+ productoId).subscribe(data=>{
    console.log(data)
    this.Producto=data;
     }
     )
    }
    
    )
 }

}


