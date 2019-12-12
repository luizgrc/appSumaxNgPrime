import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Transporte } from '@models/Transporte';

@Component({
  selector: 'lista-orden',
  templateUrl: './lista-orden.component.html',
  styleUrls: ['./lista-orden.component.scss'],
  styles: [`
        .no_dev_contenedor {
            background-color: #1CA979 !important;
            color: #ffffff !important;
        }
        .partida_llegada {
            background-color: #E8F088 !important;
            color: #ffffff !important;
        }
        .no_datos_expo {
          background-color: #2CA8B1 !important;
          color: #ffffff !important;
        }
        .viaje_consolidado {
          background-color: #2CA8B1 !important;
          color: #ffffff !important;
        }
        .otra_unidad_medida {
          background-color: #96CF97 !important;
          color: #ffffff !important;
        }
        .contenedorxconfirmar {
          background-color: #9B9AE5 !important;
          color: #ffffff !important;
        }
    `
  ]
})
export class ListaOrdenComponent implements OnInit, AfterViewInit {


  fecha1: Date;
  fecha2: Date;

  sales: any[];
  selectedRow: any;
  transporte: Transporte[];
  rowGroupMetadata: any;
  selectedColumns: any[];
  cols: any[];

  frozenCols: any[];

  scrollableCols: any[];



  @ViewChild('fecha1element', { static: false }) fecha1element: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.fecha1element.nativeElement);
    this.fecha1element = this.fecha1element['el']['nativeElement'] as ElementRef;
    console.log(this.fecha1element['children']);
  }
  ngOnInit() {



    this.cols = [
      { field: 'otransporte', header: 'O.Transporte' },
      { field: 'servicio', header: 'Servicio' },
      { field: 'oaduana', header: 'O.Aduana' },
      { field: 'cliente', header: 'Cliente' },
      { field: 'tenvio', header: 'T.Envio/UM' },
      { field: 'viaje', header: 'Viaje' },
      { field: 'oviaje', header: 'O.Viaje' },
      { field: 'estado', header: 'Estado' },
      { field: 'gtransporte', header: 'G.Transporte' },
      { field: 'fh_hra_cita', header: 'FH Hra Cita/Carguío' },
      { field: 'fh_hra_entrega', header: 'Fch HraEntrega' },
      { field: 'imo', header: 'IMO' },
      { field: 'contenedor', header: 'Contenedor' },
      { field: 'pesobruto', header: 'Peso Bruto' },
      { field: 'bul', header: 'Bul' },
      { field: 'zona', header: 'Zona' },
      { field: 'puntopartida', header: 'Punto de Partida' },
      { field: 'puntollegada', header: 'Punto de Llegada' },
      { field: 'transportista', header: 'Transportista' },
      { field: 'vehiculo', header: 'Vehiculo' },
      { field: 'chofer', header: 'Chofer' },
      { field: 'guia_aduana', header: 'Guia Aduana' },
      { field: 'ultincidencia', header: 'Ult. Incidencia (Seguimiento)' }
    ];

    this.scrollableCols = [
      { field: 'servicio', header: 'Servicio' },
      { field: 'oaduana', header: 'O.Aduana' },
      { field: 'cliente', header: 'Cliente' },
      { field: 'tenvio', header: 'T.Envio/UM' },
      { field: 'viaje', header: 'Viaje' },
      { field: 'oviaje', header: 'O.Viaje' },
      { field: 'estado', header: 'Estado' },
      { field: 'gtransporte', header: 'G.Transporte' },
      { field: 'fh_hra_cita', header: 'FH Hra Cita/Carguío' },
      { field: 'fh_hra_entrega', header: 'Fch HraEntrega' },
      { field: 'imo', header: 'IMO' },
      { field: 'contenedor', header: 'Contenedor' },
      { field: 'pesobruto', header: 'Peso Bruto' },
      { field: 'bul', header: 'Bul' },
      { field: 'zona', header: 'Zona' },
      { field: 'puntopartida', header: 'Punto de Partida' },
      { field: 'puntollegada', header: 'Punto de Llegada' },
      { field: 'transportista', header: 'Transportista' },
      { field: 'vehiculo', header: 'Vehiculo' },
      { field: 'chofer', header: 'Chofer' },
      { field: 'guia_aduana', header: 'Guia Aduana' },
      { field: 'ultincidencia', header: 'Ult. Incidencia (Seguimiento)' }
    ];

    this.frozenCols = [
      { field: 'otransporte', header: 'O.Transporte' }
    ];

    this.transporte = [
      new Transporte('19/61003014', 'CM-IMPO', '19/00008518', 'B. BRAUN MEDICAL PERU', 'CTN/KGS', '1', '19/61003755', 'LIQUIDADO', '', '', '03/06/2019 09:00 AM', '', 'HLXU3198463', '', '1', '', 'DP WORLD CALLAO', 'LOCAL', 'CLI PROYECTOS S.A', 'C4F-815', 'OJEDA PRADO KARL HENC..', '', 'SALIDA DEL CLIENTE'),
      new Transporte('19/61003014', 'CM-IMPO', '19/00008518', 'B. BRAUN MEDICAL PERU', 'CTN/KGS', '2', '19/61003756', 'LIQUIDADO', '', '', '03/06/2019 09:00 AM', '', 'UACU3198463', '', '1', '', 'DP WORLD CALLAO', 'LOCAL', 'CLI PROYECTOS S.A', 'C4F-817', 'MURILLO VELASQUEZ MAR..', '', 'SALIDA DEL CLIENTE'),
      new Transporte('19/61003015', 'CM-IMPO', '19/00007638', 'SONUTRA BLUMOS S.A.C', 'CTN/KGS', '1', '19/61003757', 'LIQUIDADO', '', '', '03/06/2019 09:00 AM', '', 'HLXU3198463', '', '1', '001', 'DP WORLD CALLAO', 'LOCAL', 'CLI PROYECTOS S.A', 'C4F-815', 'OJEDA PRADO KARL HENC..', '', 'SALIDA DEL CLIENTE'),
      new Transporte('19/61003016', 'CM-IMPO', '19/00008974', 'SUMMIT AGRO SOUTH AM.', 'CTN/KGS', '1', '19/61003758', 'LIQUIDADO', '', '', '03/06/2019 09:00 AM', '', 'HLXU3198463', '', '1', '', 'DP WORLD CALLAO', 'LOCAL', 'CLI PROYECTOS S.A', 'C4F-815', 'OJEDA PRADO KARL HENC..', '', 'SALIDA DEL CLIENTE'),
      new Transporte('19/61003016', 'CM-IMPO', '19/00008974', 'SUMMIT AGRO SOUTH AM.', 'CTN/KGS', '2', '19/61003759', 'LIQUIDADO', '', '', '03/06/2019 09:00 AM', '', 'UACU3198463', '', '1', '', 'DP WORLD CALLAO', 'LOCAL', 'CLI PROYECTOS S.A', 'C4F-817', 'MURILLO VELASQUEZ MAR..', '', 'SALIDA DEL CLIENTE'),
      new Transporte('19/61003016', 'CM-IMPO', '19/00008974', 'SUMMIT AGRO SOUTH AM.', 'CTN/KGS', '3', '19/61003760', 'LIQUIDADO', '', '', '03/06/2019 09:00 AM', '', 'UACU3198463', '', '1', '', 'DP WORLD CALLAO', 'LOCAL', 'CLI PROYECTOS S.A', 'C4F-817', 'MURILLO VELASQUEZ MAR..', '', 'SALIDA DEL CLIENTE')
    ];

    this.sales = [
      { brand: 'Programada', lastYearSale: '03/06/2019', thisYearSale: '09:00', kminicial: '1000km', kmfinal: '2000km' },
      { brand: 'Real', lastYearSale: '03/06/2019', thisYearSale: '09:00', kminicial: '1000km', kmfinal: '2100km' }
    ];

  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaDataFrozen() {
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
