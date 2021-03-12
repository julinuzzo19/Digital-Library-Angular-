import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {appRoutingProviders, routing} from './app.routing'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ErrorComponent } from './components/error/error.component';
import { fromEventPattern } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    PedidosComponent,
    ErrorComponent
   
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
