import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produkt } from '../../model/produkt.class';

@Component({
  selector: 'app-koszyk',
  imports: [],
  templateUrl: './koszyk.component.html',
  styleUrl: './koszyk.component.css'
})
export class KoszykComponent {
    @Input() kwota = 0;
    @Input() opis = '';
    @Input() opis2 = '';

}
