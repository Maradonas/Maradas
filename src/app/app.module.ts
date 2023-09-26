import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LojaComponent } from './loja/loja.component';
import { OfertasEspeciaisComponent } from './ofertas-especiais/ofertas-especiais.component';
import { CadastrarDesejosComponent } from './cadastrar-desejos/cadastrar-desejos.component';
import { LojaService } from './loja.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComboboxComponent } from './combobox/combobox.component';

@NgModule({
  declarations: [
    AppComponent,
    LojaComponent,
    OfertasEspeciaisComponent,
    CadastrarDesejosComponent,
    ComboboxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'loja', component: LojaComponent },
      { path: 'ofertas-especiais', component: OfertasEspeciaisComponent },
      { path: 'cadastrar-desejos', component: CadastrarDesejosComponent },
      { path: '', redirectTo: '/loja', pathMatch: 'full' },
    ])
  ],
  providers: [LojaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
