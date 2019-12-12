import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { SidebarService } from '../../../../services/sidebar.service';

@Component({
  selector: 'navbar-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HorizontalComponent implements OnInit {

  constructor(private sidebarservice: SidebarService) {

  }
  ngOnInit() {
  }
  hideSidebar(): void {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }
}
