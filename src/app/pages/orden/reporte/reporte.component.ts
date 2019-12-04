import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { Chart } from 'chart.js';
import { Clientes } from 'app/model/Clientes';
import { DOCUMENT } from '@angular/common';

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
  progress :HTMLElement;
  //@ViewChild("animationProgress" , {static : false}) animationProgress: ElementRef;
  constructor(@Inject(DOCUMENT) document) {
   }
  ngOnInit() {
    const interact = require('interactjs');
    const position = { x: 0, y: 0 }
    interact('.draggable-reporte').draggable({
      listeners: {
        start(event) {
          // console.log(event.target);
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
          // console.log(event.target);
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
    

       

      //  var progress = this.animationProgress;
      //this.progress = document.getElementById("animationProgress") as HTMLElement;
       
     
  }

  canvaspie(){
    this.chart2 = new Chart('canvaspie', {
      type: 'pie',
      data: {
        labels: ['Contenedor', 'Carga Suelta'],
        datasets: [
          {
            label: 'Cantidad',
            data: [451, 86],
            //fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor:[
             'rgba(255, 99, 132, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)'
           ],
           borderWidth:1
          }
        ]
      }
    });
  }

  canvasline(){
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels:  ['Red', 'Blue', 'Yellow', 'Green','Green', 'Purple', 'Orange','Orange'],
        datasets: [
          {
            label: 'Cantidad',
            data: [12, 19, 1, 5, 4, 3,5,8],
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor:[
             'rgba(255, 99, 132, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)'
           ],
           borderWidth:1
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

  calcular_fechas_mensuales(){
    //console.log(1+"/"+(Number(new Date().getMonth())+1).toString()+"/"+new Date().getFullYear());
    var date = new Date()
    var primerDia = new Date(date.getFullYear(), date.getMonth(), 1);
    var ultimoDia = new Date(date.getFullYear(), date.getMonth()+1, 0);

//    var u =(ultimoDia.getDate().toString()+"/"+(Number(ultimoDia.getMonth())+1).toString()+"/"+ultimoDia.getFullYear().toString());
    this.fechaD = primerDia;
    this.fechaH = ultimoDia;
  }

  llenarcombos(){
    this.tfechas =[
      {id:'1', nombretfecha: 'Fch Orden' },
      {id:'2', nombretfecha: 'Fch Llegada' },
      {id:'3', nombretfecha: 'Fch Zarpe' },
      {id:'4', nombretfecha: 'Fch Dua Prov' },
      {id:'5', nombretfecha: 'Fch Dua' },
      {id:'6', nombretfecha: 'Fch Entrega' },
      {id:'7', nombretfecha: 'Fch Levante' },
      {id:'8', nombretfecha: 'Fch Retiro' }
    ];
    this.estados =[
      {id:'1', nombreestado: 'Cancelado' },
      {id:'2', nombreestado: 'Concluido' },
      {id:'3', nombreestado: 'Confirmado' },
      {id:'4', nombreestado: 'Ejecutado' },
      {id:'5', nombreestado: 'Exonerado' },
      {id:'6', nombreestado: 'Liquidado' },
      {id:'7', nombreestado: 'Pendiente' },
      {id:'8', nombreestado: 'Programado' }
    ];
    this.filtros =[
      {id:'1', nombrefiltro: 'Tipo de envio' },
      {id:'2', nombrefiltro: 'Tipo de Contenedor' },
      {id:'3', nombrefiltro: 'Tipo de Carga' },
      {id:'4', nombrefiltro: 'Zonas' },
      {id:'5', nombrefiltro: 'Clientes' },
      {id:'6', nombrefiltro: 'Transportistas' },
      {id:'7', nombrefiltro: 'Conductores' },
      {id:'8', nombrefiltro: 'Vehiculos' }
    ];
    this.clientes = [
      {id:'1', nombre: 'SCHARFF LOGISTICA INTEGRADA', id_control: '1', ruc: '12345678912'},
      {id:'2', nombre: 'ADM ADUANAS S.A.C.', id_control: '2', ruc: '12345678912'},
      {id:'3', nombre: 'AXIS GROUP', id_control: '3', ruc: '12345678912'},
      {id:'4', nombre: 'IPH AGENCIA DE ADUANA E.I.R.L.', id_control: '4', ruc: '12345678912'},
      {id:'5', nombre: 'IPH AGENCIA DE CARGA S.A.C.', id_control: '5', ruc: '12345678912'},
      {id:'6', nombre: 'TRAIN PERU S.A.C.', id_control: '6', ruc: '12345678912'},
      {id:'7', nombre: 'ASIADUANAS S.A.', id_control: '7', ruc: '12345678912'},
      {id:'8', nombre: 'CLP Operador Logístico', id_control: '8', ruc: '12345678912'},
      {id:'9', nombre: 'UCL Operadores', id_control: '9', ruc: '12345678912'},
      {id:'10', nombre: 'JAIME RAMIREZ MC CUBBIN S C R LTDA', id_control: '10', ruc: '12345678912'},
      {id:'11', nombre: 'TRANSMODAL LOGISTICS PERU S.A.C.', id_control: '11', ruc: '12345678912'},
      {id:'12', nombre: 'JG ADUANAS LOGISTIC S.A.C.', id_control: '12', ruc: '12345678912'},
      {id:'13', nombre: 'PACIFICO DESPACHOS S.A.C.', id_control: '13', ruc: '12345678912'},
      {id:'14', nombre: 'CAP LOGISTIC', id_control: '14', ruc: '12345678912'},
      {id:'15', nombre: 'CONCRETEC LOGISTIC S.A.C.', id_control: '15', ruc: '12345678912'},
      {id:'16', nombre: 'CHOICE ADUANAS S.A.C.', id_control: '16', ruc: '12345678912'},
      {id:'17', nombre: 'DEPISA S.A.', id_control: '17', ruc: '12345678912'},
      {id:'18', nombre: 'L.B. GAYOSO S.A.C.', id_control: '18', ruc: '12345678912'},
      {id:'19', nombre: 'AVM ADUANERA S.A.C.', id_control: '19', ruc: '12345678912'},
      {id:'20', nombre: 'LA ESMERALDA AGENCIA DE ADUANA S.R.L.', id_control: '20', ruc: '12345678912'},
      {id:'21', nombre: 'CORPORACION CAVELTY LOGISTICS S.A.C.', id_control: '21', ruc: '12345678912'},
      {id:'22', nombre: 'DHL GLOBAL FORWARDING ADUANAS PERU S.A', id_control: '22', ruc: '12345678912'},
      {id:'23', nombre: 'AG INTERNATIONAL FREIGHT FORWARDER S.A.C.', id_control: '23', ruc: '12345678912'},
      {id:'24', nombre: 'ALEFERO OPERADOR INTERNACIONAL S.A.C.', id_control: '24', ruc: '12345678912'},
      {id:'25', nombre: 'LINK LOGISTICA PERU S.A.', id_control: '25', ruc: '12345678912'},
      {id:'26', nombre: 'HANSA ADUANAS S.A', id_control: '26', ruc: '12345678912'},
      {id:'27', nombre: 'GARCIA PERSICO S. A. C.', id_control: '27', ruc: '12345678912'},
      {id:'28', nombre: 'INTERNATIONAL FREIGHT SHIPPING S.A.C', id_control: '28', ruc: '12345678912'},
      {id:'29', nombre: 'NP LOGISTICS S.A.C', id_control: '29', ruc: '12345678912'},
      {id:'30', nombre: 'NEW WORLD ADUANAS S.A.C.', id_control: '30', ruc: '12345678912'},
      {id:'31', nombre: 'DOGANA SA', id_control: '31', ruc: '12345678912'},
      {id:'32', nombre: 'CEVA PERU ADUANAS S.A.C.', id_control: '32', ruc: '12345678912'},
      {id:'33', nombre: 'AUSA OPERACIONES LOGISTICAS S.A.', id_control: '33', ruc: '12345678912'},
      {id:'34', nombre: 'WORLD INTERNATIONAL ADUANAS S.A.C.', id_control: '34', ruc: '12345678912'}
      ];
  }

}
