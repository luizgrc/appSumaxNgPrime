import { Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import { Clientes } from 'app/model/Clientes';
import { ClientesService } from 'app/services/clientes.service';


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

  constructor(private clientesService: ClientesService) {
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
      let desde = Date.parse(this.fechaD);
      let hasta = Date.parse(this.fechaH);
      let arraycontenedor = [];
      let arraycargas = [];
      let cantidadcontenedor = 0;
      let cantidadcargas = 0;

      for (let i = 0; i < this.tipoenvio.length; i++) {
        let fecha = Date.parse(this.tipoenvio[i]["fecha"]);
        if ((fecha <= hasta && fecha >= desde)) {
          //console.log(this.tipoenvio[i]["fecha"]);
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

      //let arraycargas =[ {x:'12/12/12',y:'50'},{x:'12/12/13',y:'60'},{x:'12/12/14',y:'55'} ];
      //console.log(this.chart.data.datasets[0]['data']);

      console.log(arraycontenedor);
      console.log(arraycargas);

      this.chart.data.datasets[0]['data'] = arraycontenedor;
      this.chart.data.datasets[1]['data'] = arraycargas;
      this.chart.update();

      //let arraycontenedor =[];
      //this.addDataline(this.chart,arraycontenedor);
      //this.addDataline(this.chart,arraycargas);
    }

  }

  addDataline(chart, data) {
    //chart.data.datasets.forEach((dataset) => {
    chart.data.dataset[1]['data'] = data;
    //});
    chart.update();
  }

  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }

  removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }

  llenardatafalsa() {
    this.tipoenvio = [
      { id: '1', tipo: 'contenedor', cantidad: '10', fecha: '12/01/2019' },
      { id: '2', tipo: 'contenedor', cantidad: '20', fecha: '12/02/2019' },
      { id: '3', tipo: 'contenedor', cantidad: '30', fecha: '12/03/2019' },
      { id: '4', tipo: 'contenedor', cantidad: '40', fecha: '12/04/2019' },
      { id: '5', tipo: 'contenedor', cantidad: '50', fecha: '12/05/2019' },
      { id: '6', tipo: 'contenedor', cantidad: '25', fecha: '11/01/2019' },
      { id: '7', tipo: 'contenedor', cantidad: '30', fecha: '11/02/2019' },
      { id: '8', tipo: 'contenedor', cantidad: '12', fecha: '11/03/2019' },
      { id: '9', tipo: 'contenedor', cantidad: '56', fecha: '11/04/2019' },
      { id: '10', tipo: 'contenedor', cantidad: '41', fecha: '11/05/2019' },
      { id: '11', tipo: 'contenedor', cantidad: '56', fecha: '11/06/2019' },
      { id: '12', tipo: 'contenedor', cantidad: '58', fecha: '11/07/2019' },
      { id: '13', tipo: 'contenedor', cantidad: '82', fecha: '11/08/2019' },
      { id: '14', tipo: 'contenedor', cantidad: '89', fecha: '11/09/2019' },
      { id: '15', tipo: 'contenedor', cantidad: '56', fecha: '11/10/2019' },
      { id: '16', tipo: 'contenedor', cantidad: '98', fecha: '11/11/2019' },
      { id: '17', tipo: 'contenedor', cantidad: '58', fecha: '11/12/2019' },
      { id: '18', tipo: 'contenedor', cantidad: '84', fecha: '11/13/2019' },
      { id: '19', tipo: 'contenedor', cantidad: '50', fecha: '11/14/2019' },
      { id: '20', tipo: 'contenedor', cantidad: '19', fecha: '11/15/2019' },
      { id: '22', tipo: 'contenedor', cantidad: '30', fecha: '11/16/2019' },
      { id: '23', tipo: 'contenedor', cantidad: '12', fecha: '11/17/2019' },
      { id: '24', tipo: 'contenedor', cantidad: '56', fecha: '11/18/2019' },
      { id: '25', tipo: 'contenedor', cantidad: '41', fecha: '11/19/2019' },
      { id: '26', tipo: 'contenedor', cantidad: '56', fecha: '11/20/2019' },
      { id: '27', tipo: 'contenedor', cantidad: '58', fecha: '11/21/2019' },
      { id: '28', tipo: 'contenedor', cantidad: '82', fecha: '11/22/2019' },
      { id: '29', tipo: 'contenedor', cantidad: '89', fecha: '11/23/2019' },
      { id: '30', tipo: 'contenedor', cantidad: '56', fecha: '11/24/2019' },
      { id: '31', tipo: 'contenedor', cantidad: '98', fecha: '11/25/2019' },
      { id: '32', tipo: 'contenedor', cantidad: '58', fecha: '11/26/2019' },
      { id: '33', tipo: 'contenedor', cantidad: '84', fecha: '11/27/2019' },
      { id: '34', tipo: 'contenedor', cantidad: '50', fecha: '11/28/2019' },
      { id: '35', tipo: 'contenedor', cantidad: '19', fecha: '11/29/2019' },
      { id: '36', tipo: 'contenedor', cantidad: '58', fecha: '11/30/2019' },
      { id: '37', tipo: 'cargasuelta', cantidad: '11', fecha: '12/01/2019' },
      { id: '38', tipo: 'cargasuelta', cantidad: '12', fecha: '12/02/2019' },
      { id: '39', tipo: 'cargasuelta', cantidad: '13', fecha: '12/03/2019' },
      { id: '40', tipo: 'cargasuelta', cantidad: '14', fecha: '12/04/2019' },
      { id: '41', tipo: 'cargasuelta', cantidad: '15', fecha: '12/05/2019' },
      { id: '42', tipo: 'cargasuelta', cantidad: '12', fecha: '11/01/2019' },
      { id: '43', tipo: 'cargasuelta', cantidad: '13', fecha: '11/02/2019' },
      { id: '44', tipo: 'cargasuelta', cantidad: '11', fecha: '11/03/2019' },
      { id: '45', tipo: 'cargasuelta', cantidad: '15', fecha: '11/04/2019' },
      { id: '46', tipo: 'cargasuelta', cantidad: '14', fecha: '11/05/2019' },
      { id: '47', tipo: 'cargasuelta', cantidad: '15', fecha: '11/06/2019' },
      { id: '48', tipo: 'cargasuelta', cantidad: '15', fecha: '11/07/2019' },
      { id: '49', tipo: 'cargasuelta', cantidad: '18', fecha: '11/08/2019' },
      { id: '50', tipo: 'cargasuelta', cantidad: '18', fecha: '11/09/2019' },
      { id: '51', tipo: 'cargasuelta', cantidad: '15', fecha: '11/10/2019' },
      { id: '52', tipo: 'cargasuelta', cantidad: '19', fecha: '11/11/2019' },
      { id: '53', tipo: 'cargasuelta', cantidad: '15', fecha: '11/12/2019' },
      { id: '54', tipo: 'cargasuelta', cantidad: '18', fecha: '11/13/2019' },
      { id: '55', tipo: 'cargasuelta', cantidad: '15', fecha: '11/14/2019' },
      { id: '56', tipo: 'cargasuelta', cantidad: '11', fecha: '11/15/2019' },
      { id: '58', tipo: 'cargasuelta', cantidad: '13', fecha: '11/16/2019' },
      { id: '59', tipo: 'cargasuelta', cantidad: '11', fecha: '11/17/2019' },
      { id: '60', tipo: 'cargasuelta', cantidad: '15', fecha: '11/18/2019' },
      { id: '61', tipo: 'cargasuelta', cantidad: '14', fecha: '11/19/2019' },
      { id: '62', tipo: 'cargasuelta', cantidad: '15', fecha: '11/20/2019' },
      { id: '63', tipo: 'cargasuelta', cantidad: '15', fecha: '11/21/2019' },
      { id: '64', tipo: 'cargasuelta', cantidad: '18', fecha: '11/22/2019' },
      { id: '65', tipo: 'cargasuelta', cantidad: '18', fecha: '11/23/2019' },
      { id: '66', tipo: 'cargasuelta', cantidad: '15', fecha: '11/24/2019' },
      { id: '67', tipo: 'cargasuelta', cantidad: '19', fecha: '11/25/2019' },
      { id: '68', tipo: 'cargasuelta', cantidad: '15', fecha: '11/26/2019' },
      { id: '69', tipo: 'cargasuelta', cantidad: '18', fecha: '11/27/2019' },
      { id: '70', tipo: 'cargasuelta', cantidad: '15', fecha: '11/28/2019' },
      { id: '71', tipo: 'cargasuelta', cantidad: '11', fecha: '11/29/2019' },
      { id: '72', tipo: 'cargasuelta', cantidad: '15', fecha: '11/30/2019' }
    ];
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
}
