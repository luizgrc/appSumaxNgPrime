import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TreeNode,MenuItem } from 'primeng/api';
import { OrdenService } from '@services/orden.service';

@Component({

  selector: 'lista-orden',
  templateUrl: './lista-orden.component.html',
  styleUrls: ['./lista-orden.component.scss']
})
export class ListaOrdenComponent implements OnInit {

    files: TreeNode[];
    cols: any[];
    colschild: any[];
    items: MenuItem[];

    constructor(public ordenService: OrdenService ) { }

    ngOnInit() {
        this.cols = this.ordenService.getColumnasTransporte();

        this.files = this.ordenService.getDataOrdenTransporte();
        
        this.items = [
            {label: 'Update', icon: 'pi pi-refresh', routerLink: ['/setup']},
            {label: 'Delete', icon: 'pi pi-times', routerLink: ['/setup']},
            {label: 'Angular.io', icon: 'pi pi-info',routerLink: ['/setup']},
            {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
        ];

        console.log(this.cols)

    }



}
