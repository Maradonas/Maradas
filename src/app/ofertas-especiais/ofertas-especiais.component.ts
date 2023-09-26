import { Component } from '@angular/core';
import { Produto } from '../Models/produto';
import { LojaService } from '../loja.service';

@Component({
  selector: 'app-ofertas-especiais',
  templateUrl: './ofertas-especiais.component.html',
  styleUrls: ['./ofertas-especiais.component.css']
})
export class OfertasEspeciaisComponent {
  ofertas: Produto[];

  constructor(private lojaService: LojaService) {
    this.ofertas = lojaService.ofertas;
  }
}
