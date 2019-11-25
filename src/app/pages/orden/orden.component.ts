export class Car {
  vin: string;
  year: string;
  brand: string;
  color: string;
  constructor(vin: string, year: string, brand: string, color: string) {
    this.vin = vin;
    this.year = year;
    this.brand = brand;
    this.color = color;

  }
}
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrdenComponent implements OnInit {
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
