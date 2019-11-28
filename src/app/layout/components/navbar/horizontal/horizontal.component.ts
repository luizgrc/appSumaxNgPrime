import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { SidebarService } from '../../../../services/sidebar.service';

@Component({
  selector: 'horizontal',
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
    console.log(this.sidebarservice.getSidebarState());
    return this.sidebarservice.getSidebarState();
  }
}
