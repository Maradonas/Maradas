import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LojaComponent } from './loja/loja.component';
import { OfertasEspeciaisComponent } from './ofertas-especiais/ofertas-especiais.component';
import { CadastrarDesejosComponent } from './cadastrar-desejos/cadastrar-desejos.component';

const routes: Routes = [
  { path: 'loja', component: LojaComponent },
  { path: 'ofertas-especiais', component: OfertasEspeciaisComponent },
  { path: 'cadastrar-desejos', component: CadastrarDesejosComponent },
  { path: '', redirectTo: '/loja', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
