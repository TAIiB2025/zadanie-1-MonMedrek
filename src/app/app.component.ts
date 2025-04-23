import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduktComponent } from './produkt/produkt.component';
import { Produkt } from '../model/produkt.class';
import { CommonModule } from '@angular/common';
import { KoszykComponent } from "./koszyk/koszyk.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProduktComponent, CommonModule, KoszykComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taiib_zadanie';
  produkt: Produkt[] = [
    new Produkt('Produkt1',99.89,new Date(), true),
    new Produkt('Produkt2',88.89,new Date(), false),
    new Produkt('Produkt3',12.45,new Date(), false),
    new Produkt('Produkt4',45.59,new Date(), false),
    new Produkt('Produkt5',122.99,new Date(), true),
  ];

  kwota = 0;
  produktyWidoczne = true;

  constructor() {

  }
  onZmianaKwoty(event: Produkt): void {
    this.kwota += event.cena;
  }
}
