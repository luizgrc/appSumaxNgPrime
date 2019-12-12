import { Injectable } from '@angular/core';
import { Clientes } from 'app/shared/models/Clientes';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clientes: Clientes[] = [
    { id: '1', nombre: 'SCHARFF LOGISTICA INTEGRADA', id_control: '1', ruc: '12345678912' },
    { id: '2', nombre: 'ADM ADUANAS S.A.C.', id_control: '2', ruc: '12345678912' },
    { id: '3', nombre: 'AXIS GROUP', id_control: '3', ruc: '12345678912' },
    { id: '4', nombre: 'IPH AGENCIA DE ADUANA E.I.R.L.', id_control: '4', ruc: '12345678912' },
    { id: '5', nombre: 'IPH AGENCIA DE CARGA S.A.C.', id_control: '5', ruc: '12345678912' },
    { id: '6', nombre: 'TRAIN PERU S.A.C.', id_control: '6', ruc: '12345678912' },
    { id: '7', nombre: 'ASIADUANAS S.A.', id_control: '7', ruc: '12345678912' },
    { id: '8', nombre: 'CLP Operador Logístico', id_control: '8', ruc: '12345678912' },
    { id: '9', nombre: 'UCL Operadores', id_control: '9', ruc: '12345678912' },
    { id: '10', nombre: 'JAIME RAMIREZ MC CUBBIN S C R LTDA', id_control: '10', ruc: '12345678912' },
    { id: '11', nombre: 'TRANSMODAL LOGISTICS PERU S.A.C.', id_control: '11', ruc: '12345678912' },
    { id: '12', nombre: 'JG ADUANAS LOGISTIC S.A.C.', id_control: '12', ruc: '12345678912' },
    { id: '13', nombre: 'PACIFICO DESPACHOS S.A.C.', id_control: '13', ruc: '12345678912' },
    { id: '14', nombre: 'CAP LOGISTIC', id_control: '14', ruc: '12345678912' },
    { id: '15', nombre: 'CONCRETEC LOGISTIC S.A.C.', id_control: '15', ruc: '12345678912' },
    { id: '16', nombre: 'CHOICE ADUANAS S.A.C.', id_control: '16', ruc: '12345678912' },
    { id: '17', nombre: 'DEPISA S.A.', id_control: '17', ruc: '12345678912' },
    { id: '18', nombre: 'L.B. GAYOSO S.A.C.', id_control: '18', ruc: '12345678912' },
    { id: '19', nombre: 'AVM ADUANERA S.A.C.', id_control: '19', ruc: '12345678912' },
    { id: '20', nombre: 'LA ESMERALDA AGENCIA DE ADUANA S.R.L.', id_control: '20', ruc: '12345678912' },
    { id: '21', nombre: 'CORPORACION CAVELTY LOGISTICS S.A.C.', id_control: '21', ruc: '12345678912' },
    { id: '22', nombre: 'DHL GLOBAL FORWARDING ADUANAS PERU S.A', id_control: '22', ruc: '12345678912' },
    { id: '23', nombre: 'AG INTERNATIONAL FREIGHT FORWARDER S.A.C.', id_control: '23', ruc: '12345678912' },
    { id: '24', nombre: 'ALEFERO OPERADOR INTERNACIONAL S.A.C.', id_control: '24', ruc: '12345678912' },
    { id: '25', nombre: 'LINK LOGISTICA PERU S.A.', id_control: '25', ruc: '12345678912' },
    { id: '26', nombre: 'HANSA ADUANAS S.A', id_control: '26', ruc: '12345678912' },
    { id: '27', nombre: 'GARCIA PERSICO S. A. C.', id_control: '27', ruc: '12345678912' },
    { id: '28', nombre: 'INTERNATIONAL FREIGHT SHIPPING S.A.C', id_control: '28', ruc: '12345678912' },
    { id: '29', nombre: 'NP LOGISTICS S.A.C', id_control: '29', ruc: '12345678912' },
    { id: '30', nombre: 'NEW WORLD ADUANAS S.A.C.', id_control: '30', ruc: '12345678912' },
    { id: '31', nombre: 'DOGANA SA', id_control: '31', ruc: '12345678912' },
    { id: '32', nombre: 'CEVA PERU ADUANAS S.A.C.', id_control: '32', ruc: '12345678912' },
    { id: '33', nombre: 'AUSA OPERACIONES LOGISTICAS S.A.', id_control: '33', ruc: '12345678912' },
    { id: '34', nombre: 'WORLD INTERNATIONAL ADUANAS S.A.C.', id_control: '34', ruc: '12345678912' }
  ];
  constructor() { }
  getMenuList() {
    return this.clientes;
  }
}
