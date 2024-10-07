import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //http=inject(HttpClient); otra forma de inyectar dependencias


  private baseUrl ='https://api.escuelajs.co/api/v1/' //string a donde voy hacer la peticion, la base
  constructor(
    private http:HttpClient
  ) { }


  getAllProducts(){
    return this.http.get<Product[]>(`${this.baseUrl}/products`)// peticion http que retorna un observable, "un asincronico"  (parametro)
  }

  getProductById(id:number){
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`)//producto en especifico
  }
}

