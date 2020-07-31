import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './rutas/contacto/contacto.component';
import { NosotrosComponent } from './rutas/nosotros/nosotros.component';
import { Error404Component } from './rutas/error404/error404.component';
import { HomeComponent } from './rutas/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
