import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './rutas/contacto/contacto.component';
import { NosotrosComponent } from './rutas/nosotros/nosotros.component';
import { Error404Component } from './rutas/error404/error404.component';
import { HomeComponent } from './rutas/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
    NosotrosComponent,
    Error404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
