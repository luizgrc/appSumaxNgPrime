import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreeNode, MessageService } from 'primeng/api';
import { OrdenService } from '@services/orden.service';

@Component({
    selector: 'lista-orden',
    templateUrl: './lista-orden.component.html',
    styleUrls: ['./lista-orden.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListaOrdenComponent implements OnInit {

    files: TreeNode[];
    cols: any[];
    colschild: any[];
    constructor() { }

    ngOnInit() {
        this.cols = [
            { field: 'nro_orden', header: 'Nro Orden Transporte', header2: 'Nro Orden Viaje' },
            { field: 'fch_estimada_entrega', header: 'Fecha Estimada de Entrega', header2: 'Fecha Estimada de Entrega' },
            { field: 'punto_partida', header: 'Punto de Partida', header2: 'Punto de Partida' },
            { field: 'punto_llegada', header: 'Punto de Llegada', header2: 'Punto de Llegada' }
        ];

        this.files = [
            {
                "data": {
                    "nro_orden": "19/00/000001",
                    "fch_estimada_entrega": "",
                    "punto_partida": "",
                    "punto_llegada": "",
                    "orden": ""
                },
                "children": [
                    {
                        "data": {
                            "nro_orden": "19/00/000011",
                            "fch_estimada_entrega": "10/12/2019",
                            "punto_partida": "DP World",
                            "punto_llegada": "Local de cliente",
                            "orden": "1"

                        }
                    },
                    {
                        "data": {
                            "nro_orden": "19/00/000012",
                            "fch_estimada_entrega": "10/12/2019",
                            "punto_partida": "DP World",
                            "punto_llegada": "Local de cliente",
                            "orden": "2"
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
                    "orden": ""
                },
                "children": [
                    {
                        "data": {
                            "nro_orden": "19/00/000021",
                            "fch_estimada_entrega": "10/12/2019",
                            "punto_partida": "DP World",
                            "punto_llegada": "Local de cliente",
                            "orden": "1"
                        }
                    },
                    {
                        "data": {
                            "nro_orden": "19/00/000022",
                            "fch_estimada_entrega": "10/12/2019",
                            "punto_partida": "DP World",
                            "punto_llegada": "Local de cliente",
                            "orden": "2"
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
                    "orden": ""
                },
                "children": [
                    {
                        "data": {
                            "nro_orden": "19/00/000031",
                            "fch_estimada_entrega": "10/12/2019",
                            "punto_partida": "DP World",
                            "punto_llegada": "Local de cliente",
                            "orden": "1"
                        }
                    },
                    {
                        "data": {
                            "nro_orden": "19/00/000032",
                            "fch_estimada_entrega": "10/12/2019",
                            "punto_partida": "DP World",
                            "punto_llegada": "Local de cliente",
                            "orden": "2"
                        },
                    }
                ]
            }
        ];
    }


}
