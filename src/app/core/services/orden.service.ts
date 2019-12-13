import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  ColumnasTrans = [
    { field: 'nro_orden', header: 'Nro Orden Transporte', header2: 'Nro Orden Viaje' },
    { field: 'fch_estimada_entrega', header: 'Fecha Estimada de Entrega', header2: 'Fecha Estimada de Entrega' },
    { field: 'punto_partida', header: 'Punto de Partida', header2: 'Punto de Partida' },
    { field: 'punto_llegada', header: 'Punto de Llegada', header2: 'Punto de Llegada' }
  ]


  DataOrdenTrans = [
    {
      "data": {
        "nro_orden": "19/00/000001",
        "fch_estimada_entrega": "",
        "punto_partida": "",
        "punto_llegada": "",
        "viaje": ""
      },
      "children": [
        {
          "data": {
            "nro_orden": "19/00/000011",
            "fch_estimada_entrega": "10/12/2019",
            "punto_partida": "DP World",
            "punto_llegada": "Local de cliente",
            "viaje": "1"

          }
        },
        {
          "data": {
            "nro_orden": "19/00/000012",
            "fch_estimada_entrega": "10/12/2019",
            "punto_partida": "DP World",
            "punto_llegada": "Local de cliente",
            "viaje": "2"
          },
        }
      ]
    },
    {
      "data": {
        "nro_orden": "19/00/000002",
        "fch_estimada_entrega": "",
        "punto_partida": "",
        "punto_llegada": "",
        "viaje": ""
      },
      "children": [
        {
          "data": {
            "nro_orden": "19/00/000021",
            "fch_estimada_entrega": "10/12/2019",
            "punto_partida": "DP World",
            "punto_llegada": "Local de cliente",
            "viaje": "1"
          }
        },
        {
          "data": {
            "nro_orden": "19/00/000022",
            "fch_estimada_entrega": "10/12/2019",
            "punto_partida": "DP World",
            "punto_llegada": "Local de cliente",
            "viaje": "2"
          },
        }
      ]
    },
    {
      "data": {
        "nro_orden": "19/00/000003",
        "fch_estimada_entrega": "",
        "punto_partida": "",
        "punto_llegada": "",
        "viaje": ""
      },
      "children": [
        {
          "data": {
            "nro_orden": "19/00/000031",
            "fch_estimada_entrega": "10/12/2019",
            "punto_partida": "DP World",
            "punto_llegada": "Local de cliente",
            "viaje": "1"
          }
        },
        {
          "data": {
            "nro_orden": "19/00/000032",
            "fch_estimada_entrega": "10/12/2019",
            "punto_partida": "DP World",
            "punto_llegada": "Local de cliente",
            "viaje": "2"
          },
        }
      ]
    }
  ];

  constructor() { }

  getDataOrdenTransporte() {
    return this.DataOrdenTrans;
  }
  getColumnasTransporte() {
    return this.ColumnasTrans;
  }

}


