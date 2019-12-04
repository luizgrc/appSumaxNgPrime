import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {
  chart: any;
  constructor() { }

  ngOnInit() {
    //   this.chart = new Chart('canvas', {
    //     type: this.tipo,
    //     data: {
    //       labels: fechas,
    //       datasets: [
    //         {
    //           label: 'Cantidad',
    //           data: cantidades,
    //           borderColor: '#3cba9f',
    //           fill: false,
    //           backgroundColor: [
    //             'rgba(255, 99, 132, 0.2)',
    //             'rgba(54, 162, 235, 0.2)',
    //             'rgba(255, 206, 86, 0.2)',
    //             'rgba(75, 192, 192, 0.2)',
    //             'rgba(153, 102, 0, 0.2)',
    //             'rgba(255, 159, 64, 0.2)'
    //           ]
    //         }
    //       ]
    //     },
    //     options: {
    //       legend: {
    //         display: false
    //       },
    //       scales: {
    //         xAxes: [{
    //           display: true
    //         }],
    //         yAxes: [{
    //           display: true
    //         }],
    //       }
    //     }
    //   });
    // });
  }


}
