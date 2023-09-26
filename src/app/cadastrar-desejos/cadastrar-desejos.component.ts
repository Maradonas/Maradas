import { Component } from '@angular/core';
import { Desejo } from '../Models/desejo';
import { LojaService } from '../loja.service';

@Component({
  selector: 'app-cadastrar-desejos',
  styleUrls: ['./cadastrar-desejos.component.css'],
  templateUrl: './cadastrar-desejos.component.html'
})
export class CadastrarDesejosComponent {
  desejos: Desejo[];
  novoDesejo: string;

  constructor(private lojaService: LojaService) {
    this.desejos = lojaService.desejos;
    this.novoDesejo = ''; 
  }

  cadastrarDesejo() {
    // Verifique se o novoDesejo não está vazio antes de adicionar
    if (this.novoDesejo.trim() !== '') {
      this.lojaService.adicionarDesejo(this.novoDesejo);
      this.novoDesejo = ''; // Limpe o campo após adicionar
    }
  }
}
