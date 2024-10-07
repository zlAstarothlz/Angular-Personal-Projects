import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit,AfterViewInit, OnDestroy{  //implements = para decir que voy a suar esos ciclos de vida del componente de angular

contador:number=0;
//interval!:NodeJS.Timeout;

  constructor(
    private productsService:ProductsService //asincrono
  ){
    console.log('constructor');//construye los requisitos iniciales para la aplicacion, dependdencia...
  }
  ngOnInit(): void {
    console.log('ngOninit');//ejecuta todo lo asincronico
    this.getProducts();
   // setTimeout(()=> {
     // console.log('setTimeout');
   // },1000);
  }


  getProducts(){
      this.productsService.getAllProducts()
      .subscribe(data =>{
        console.log(data);
        const idFirstProduct = data[0].id;
        this.getProductsById(idFirstProduct);
      })
    }
  getProductsById(id:number)
  {
      this.productsService.getProductById(id)
      .subscribe(data =>{
        console.log('producto',data);
      })

  }




  //hasta aqui no se ha renderizado el html y el css
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');//
  }
  ngOnDestroy(): void {
    //clearInterval(this.interval);
    console.log('ngOnDestroy');//
  }


}
