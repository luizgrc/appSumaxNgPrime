import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Car } from 'app/model/Car';
import { Transporte } from 'app/model/Transporte';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'lista-orden',
  templateUrl: './lista-orden.component.html',
  styleUrls: ['./lista-orden.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class ListaOrdenComponent implements OnInit, AfterViewInit {

  cars1: Car[];
  brands: SelectItem[];

  fecha1: Date;
  fecha2: Date;

  sales: any[];

  transporte: Transporte[];
  rowGroupMetadata: any;
  @ViewChild('fecha1element', { static: false }) fecha1element: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.fecha1element.nativeElement);
    this.fecha1element = this.fecha1element['el']['nativeElement'] as ElementRef;
    console.log(this.fecha1element['children']);
  }
  ngOnInit() {
    this.cars1 = [
      new Car('ASd', 'ASd', 'ASd', 'ASd'),
      new Car('ASd', 'ASd', 'ASd', 'ASd'),
      new Car('ASd', 'ASd', 'ASd', 'ASd'),
      new Car('ASd', 'ASd', 'ASd', 'ASd'),
      new Car('ASd', 'ASd', 'ASd', 'ASd'),
    ];

    this.transporte = [
      new Transporte('19/61003014', 'CM-IMPO', '19/00008518', 'B. BRAUN MEDICAL PERU', 'CTN/KGS', '1', '19/61003755', 'LIQUIDADO', '', '', '03/06/2019 09:00 AM', '', 'HLXU3198463', '', '1', '', 'DP WORLD CALLAO', 'LOCAL', 'CLI PROYECTOS S.A', 'C4F-815', 'OJEDA PRADO KARL HENC..', '', 'SALIDA DEL CLIENTE'),
      new Transporte('19/61003014', 'CM-IMPO', '19/00008518', 'B. BRAUN MEDICAL PERU', 'CTN/KGS', '2', '19/61003756', 'LIQUIDADO', '', '', '03/06/2019 09:00 AM', '', 'UACU3198463', '', '1', '', 'DP WORLD CALLAO', 'LOCAL', 'CLI PROYECTOS S.A', 'C4F-817', 'MURILLO VELASQUEZ MAR..', '', 'SALIDA DEL CLIENTE'),
      new Transporte('19/61003015', 'CM-IMPO', '19/00007638', 'SONUTRA BLUMOS S.A.C', 'CTN/KGS', '1', '19/61003757', 'LIQUIDADO', '', '', '03/06/2019 09:00 AM', '', 'HLXU3198463', '', '1', '001', 'DP WORLD CALLAO', 'LOCAL', 'CLI PROYECTOS S.A', 'C4F-815', 'OJEDA PRADO KARL HENC..', '', 'SALIDA DEL CLIENTE'),
      new Transporte('19/61003016', 'CM-IMPO', '19/00008974', 'SUMMIT AGRO SOUTH AM.', 'CTN/KGS', '1', '19/61003758', 'LIQUIDADO', '', '', '03/06/2019 09:00 AM', '', 'HLXU3198463', '', '1', '', 'DP WORLD CALLAO', 'LOCAL', 'CLI PROYECTOS S.A', 'C4F-815', 'OJEDA PRADO KARL HENC..', '', 'SALIDA DEL CLIENTE'),
      new Transporte('19/61003016', 'CM-IMPO', '19/00008974', 'SUMMIT AGRO SOUTH AM.', 'CTN/KGS', '2', '19/61003759', 'LIQUIDADO', '', '', '03/06/2019 09:00 AM', '', 'UACU3198463', '', '1', '', 'DP WORLD CALLAO', 'LOCAL', 'CLI PROYECTOS S.A', 'C4F-817', 'MURILLO VELASQUEZ MAR..', '', 'SALIDA DEL CLIENTE'),
      new Transporte('19/61003016', 'CM-IMPO', '19/00008974', 'SUMMIT AGRO SOUTH AM.', 'CTN/KGS', '3', '19/61003760', 'LIQUIDADO', '', '', '03/06/2019 09:00 AM', '', 'UACU3198463', '', '1', '', 'DP WORLD CALLAO', 'LOCAL', 'CLI PROYECTOS S.A', 'C4F-817', 'MURILLO VELASQUEZ MAR..', '', 'SALIDA DEL CLIENTE')
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
    this.sales = [
      { brand: 'Programada', lastYearSale: '03/06/2019', thisYearSale: '09:00', kminicial: '1000km', kmfinal: '2000km' },
      { brand: 'Real', lastYearSale: '03/06/2019', thisYearSale: '09:00', kminicial: '1000km', kmfinal: '2100km' }
    ];

  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.transporte) {
      for (let i = 0; i < this.transporte.length; i++) {
        let rowData = this.transporte[i];
        let otransporte = rowData.otransporte;
        let servicio = rowData.servicio;
        let oaduana = rowData.oaduana;
        let cliente = rowData.cliente;
        let tenvio = rowData.tenvio;
        if (i == 0) {
          this.rowGroupMetadata[otransporte] = { index: 0, size: 1 };
          this.rowGroupMetadata[servicio] = { index: 0, size: 1 };
          this.rowGroupMetadata[oaduana] = { index: 0, size: 1 };
          this.rowGroupMetadata[cliente] = { index: 0, size: 1 };
          this.rowGroupMetadata[tenvio] = { index: 0, size: 1 };

        }
        else {
          let previousRowData = this.transporte[i - 1];
          let previousRowGroup = previousRowData.otransporte;
          if (otransporte === previousRowGroup) {
            this.rowGroupMetadata[otransporte].size++;
            this.rowGroupMetadata[servicio].size++;
            this.rowGroupMetadata[oaduana].size++;
            this.rowGroupMetadata[cliente].size++;
            this.rowGroupMetadata[tenvio].size++;
          }
          else {
            this.rowGroupMetadata[otransporte] = { index: i, size: 1 };
            this.rowGroupMetadata[servicio] = { index: i, size: 1 };
            this.rowGroupMetadata[oaduana] = { index: i, size: 1 };
            this.rowGroupMetadata[cliente] = { index: i, size: 1 };
            this.rowGroupMetadata[tenvio] = { index: i, size: 1 };
          }
        }
      }
    }
  }

}
