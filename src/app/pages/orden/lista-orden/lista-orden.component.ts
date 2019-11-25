import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Car } from 'app/_model/Car';
import { SelectItem } from 'primeng/components/common/selectitem';
@Component({
  selector: 'lista-orden',
  templateUrl: './lista-orden.component.html',
  styleUrls: ['./lista-orden.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListaOrdenComponent implements OnInit {
  cars1: Car[];
  brands: SelectItem[];
  constructor() { }

  ngOnInit() {
    this.cars1 = [
      new Car('ASd', 'ASd', 'ASd', 'ASd'),
      new Car('ASd', 'ASd', 'ASd', 'ASd'),
      new Car('ASd', 'ASd', 'ASd', 'ASd'),
      new Car('ASd', 'ASd', 'ASd', 'ASd'),
      new Car('ASd', 'ASd', 'ASd', 'ASd'),
    ];
    this.brands = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];
  }

}
