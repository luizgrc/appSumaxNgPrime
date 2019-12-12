import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';


@Component({
    selector: 'vertical-layout',
    templateUrl: './vertical-layout.component.html',
    styleUrls: ['./vertical-layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class VerticalLayoutComponent implements OnInit {
    constructor(private sidebarService: SidebarService) {
    }

    ngOnInit() {
    }
    getSideBarState() {
        return this.sidebarService.getSidebarState();
    }
}
