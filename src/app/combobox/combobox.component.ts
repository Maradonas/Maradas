import { Component } from '@angular/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']
})
export class ComboboxComponent {
  selectedOption: string = '';
  options = ['G', 'M', 'P']; // Array de opções
}
