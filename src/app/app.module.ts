import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './components/component/component.component';
import { OtrocomponenteComponent } from './components/otro-componente/otrocomponente/otrocomponente.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    OtrocomponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
