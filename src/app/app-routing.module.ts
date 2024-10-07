import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './components/component/component.component';
import { OtrocomponenteComponent } from './components/otro-componente/otrocomponente/otrocomponente.component';

const routes: Routes = [
{
   path:'',
   component: ComponentComponent
},
{
  path:'other',
  component:OtrocomponenteComponent

},
{
  path:'products',
  loadChildren:()=> import('./modules/product/product.module').then(m=>m.ProductModule)//lazzyloud
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
