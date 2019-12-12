import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as moment from 'moment'
import { Router, ActivatedRoute } from '@angular/router';
import { Clientes } from '@models/Clientes';
import { ClientesService } from '@services/clientes.service';
import { ReporteService } from '@services/reporte.service';

@Component({
  selector: 'reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {
  chart: any;
  chart2: any;
  clientes: Clientes[];
  filtros;
  estados;
  tfechas;
  fechaD;
  fechaH;
  tipoenvio;
  selectFl;
  cantidadco;
  cantidadca;

  constructor(
    private clientesService: ClientesService,
    private reporteService: ReporteService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {

    const interact = require('interactjs');
    const position = { x: 0, y: 0 }
    interact('.draggable-reporte').draggable({
      listeners: {
        start(event) {
          event.target.style.border = '1px solid #262626';
          event.target.style.zIndex = 2;
        },
        move(event) {
          position.x += event.dx;
          position.y += event.dy;

          event.target.style.transform =
            `translate(${position.x}px, ${position.y}px)`;
        },
        end(event) {
          event.target.style.border = '';
        }
      },
      modifiers: [
        interact.modifiers.restrict({
          restriction: '#content',
          elementRect: { top: 0, right: 0, bottom: 0, left: 0 },
        })
      ]
    });

    this.calcular_fechas_mensuales();
    this.llenarcombos();
    this.canvasline();
    this.canvaspie();
    this.llenardatafalsa();
  }

  canvaspie() {
    this.chart2 = new Chart('canvaspie', {
      type: 'pie',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Cantidad',
            data: [],
            //fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: true,
          position: 'bottom'
        }
      }

    });
  }
  //https://codepen.io/adrianhurt/pen/ZOyKqJ url de chartline
  canvasline() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Contenedor',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: false,
            borderWidth: 1
          },
          {
            label: 'Carga Suelta',
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: false,
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Reporte lineal"
        },
        scales: {
          xAxes: [{
            type: "time",
            time: {
              unit: 'day'
            },
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Fecha'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Cantidad'
            }
          }]
        }
      }
    });



  }




  calcular_fechas_mensuales() {
    let date = new Date()
    let primerDia = new Date(date.getFullYear(), date.getMonth(), 1);
    let ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.fechaD = primerDia;
    this.fechaH = ultimoDia;
  }
  consultarreporte() {

    if (this.selectFl.id == "1") {
      let arraycontenedor = [];
      let arraycargas = [];
      let cantidadcontenedor = 0;
      let cantidadcargas = 0;
      let a = moment([this.fechaH.getFullYear(), this.fechaH.getMonth(), this.fechaH.getDate()]);
      let b = moment([this.fechaD.getFullYear(), this.fechaD.getMonth(), this.fechaD.getDate()]);
      let dif = (a.diff(b, 'months'));
      console.log(dif);

      let desde = Date.parse(this.fechaD);
      let hasta = Date.parse(this.fechaH);


      for (let i = 0; i < this.tipoenvio.length; i++) {
        let fecha = Date.parse(this.tipoenvio[i]["fecha"]);
        if ((fecha <= hasta && fecha >= desde)) {
          let tipo = this.tipoenvio[i]["tipo"];
          if (tipo == "contenedor") {
            cantidadcontenedor = cantidadcontenedor + Number(this.tipoenvio[i]["cantidad"]);
            arraycontenedor.push({ x: this.tipoenvio[i]["fecha"], y: this.tipoenvio[i]["cantidad"] });
          } else {
            cantidadcargas = cantidadcargas + Number(this.tipoenvio[i]["cantidad"]);
            arraycargas.push({ x: this.tipoenvio[i]["fecha"], y: this.tipoenvio[i]["cantidad"] });
          }
        }
      }
      this.cantidadca = cantidadcargas;
      this.cantidadco = cantidadcontenedor;

      this.chart2.data.labels = [];
      this.chart2.data.datasets[0].data = [];

      this.addData(this.chart2, 'Contenedor', cantidadcontenedor);
      this.addData(this.chart2, 'Carga Suelta', cantidadcargas);

      let arraycontenedor2 = [];
      let arraycargas2 = [];

      if (dif < 1) {
        this.redondeardias(arraycontenedor, arraycontenedor2);
        this.redondeardias(arraycargas, arraycargas2);
        this.chart.options.scales["xAxes"]["0"]["time"]["unit"] = "day"
      }
      else if (dif < 12) {
        this.redondearmeses(arraycontenedor, arraycontenedor2);
        this.redondearmeses(arraycargas, arraycargas2);
        this.chart.options.scales["xAxes"]["0"]["time"]["unit"] = "month"
      }
      else {
        this.redondearyear(arraycontenedor, arraycontenedor2);
        this.redondearyear(arraycargas, arraycargas2);
        this.chart.options.scales["xAxes"]["0"]["time"]["unit"] = "year"
      }

      this.chart.data.datasets[0]['data'] = arraycontenedor2;
      this.chart.data.datasets[1]['data'] = arraycargas2;
      this.chart.update();

    }

  }

  redondeardias(a, a2) {
    let array = a.reduce((groups, item) => {
      let val = new Date(item['x']).getDate();
      groups[val] = groups[val] || { x: item.x, y: 0 };
      groups[val].y += Number(item.y);
      return groups;
    }, {});

    for (const key in array) {
      if (array.hasOwnProperty(key)) {
        const element = array[key];
        a2.push(element);
      }
    }
  }

  redondearmeses(a, a2) {
    let array = a.reduce((groups, item) => {
      let val = new Date(item['x']).getMonth();
      groups[val] = groups[val] || { x: item.x, y: 0 };
      groups[val].y += Number(item.y);
      return groups;
    }, {});

    for (const key in array) {
      if (array.hasOwnProperty(key)) {
        const element = array[key];
        a2.push(element);
      }
    }
  }

  redondearyear(a, a2) {
    let array = a.reduce((groups, item) => {
      let val = new Date(item['x']).getFullYear();
      groups[val] = groups[val] || { x: item.x, y: 0 };
      groups[val].y += Number(item.y);
      return groups;
    }, {});

    for (const key in array) {
      if (array.hasOwnProperty(key)) {
        const element = array[key];
        a2.push(element);
      }
    }
  }

  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }


  llenardatafalsa() {
    this.tipoenvio = this.reporteService.getdatareporte();
  }

  llenarcombos() {
    this.tfechas = [
      { id: '1', nombretfecha: 'Fch Orden' },
      { id: '2', nombretfecha: 'Fch Llegada' },
      { id: '3', nombretfecha: 'Fch Zarpe' },
      { id: '4', nombretfecha: 'Fch Dua Prov' },
      { id: '5', nombretfecha: 'Fch Dua' },
      { id: '6', nombretfecha: 'Fch Entrega' },
      { id: '7', nombretfecha: 'Fch Levante' },
      { id: '8', nombretfecha: 'Fch Retiro' }
    ];
    this.estados = [
      { id: '1', nombreestado: 'Cancelado' },
      { id: '2', nombreestado: 'Concluido' },
      { id: '3', nombreestado: 'Confirmado' },
      { id: '4', nombreestado: 'Ejecutado' },
      { id: '5', nombreestado: 'Exonerado' },
      { id: '6', nombreestado: 'Liquidado' },
      { id: '7', nombreestado: 'Pendiente' },
      { id: '8', nombreestado: 'Programado' }
    ];
    this.filtros = [
      { id: '1', nombrefiltro: 'Tipo de envio' },
      { id: '2', nombrefiltro: 'Tipo de Contenedor' },
      { id: '3', nombrefiltro: 'Tipo de Carga' },
      { id: '4', nombrefiltro: 'Zonas' },
      { id: '5', nombrefiltro: 'Clientes' },
      { id: '6', nombrefiltro: 'Transportistas' },
      { id: '7', nombrefiltro: 'Conductores' },
      { id: '8', nombrefiltro: 'Vehiculos' }
    ];
    this.clientes = this.clientesService.getMenuList();
  }
  closeViaParent() {
    this.router.navigate(
      [
        {
          outlets: {
            reporte: null
          }
        }
      ],
      {
        relativeTo: this.activatedRouter.parent
      }
    );
  }
}
