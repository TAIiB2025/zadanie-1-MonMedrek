import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produkt } from '../../model/produkt.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produkt',
  imports: [CommonModule],
  templateUrl: './produkt.component.html',
  styleUrl: './produkt.component.css'
})
export class ProduktComponent {
  @Input() produkt!:Produkt;
  @Output() zmianaKwoty = new EventEmitter<Produkt>();
  constructor(){
  }
  

  onZmianaKwotyClick(): void{
    this.zmianaKwoty.emit(this.produkt);
  }
}
