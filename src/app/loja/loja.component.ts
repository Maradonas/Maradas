import { Component } from '@angular/core';
import { Produto } from '../Models/produto';
import { LojaService } from '../loja.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']

  
})
export class LojaComponent {
  produtos: Produto[];

  constructor(private lojaService: LojaService) {
    this.produtos = lojaService.produtos;
  }
}
