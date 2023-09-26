import { Injectable } from '@angular/core';
import { Produto } from './Models/produto';
import { Desejo } from './Models/desejo';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  produtos: Produto[] = [
    { nome: 'Tênis Air force 1', preco: 250, imagem: 'AirJordan.jpeg' },
    { nome: 'Blusa Vermelha Adidas', preco: 220, imagem: 'BlusaVermelha.jpg' },
    { nome: 'Camisa', preco: 80, imagem: 'camiseta.png' },
    // Adicione mais produtos aqui
  ];

  ofertas: Produto[] = [
    { nome: 'Controle de Playstation', preco: 250, imagem: 'PS.png' },
    
    // Adicione mais ofertas especiais aqui
  ];

  desejos: Desejo[] = [];

  adicionarDesejo(desejo: string) {
    this.desejos.push({ descricao: desejo });
  }

  // Implemente outros métodos para buscar produtos e ofertas
}
