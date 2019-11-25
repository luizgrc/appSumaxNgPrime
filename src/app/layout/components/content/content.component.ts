
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/components/common/selectitem';


@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

}
