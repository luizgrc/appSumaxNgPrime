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
  constructor() { }

  ngOnInit() {
    this.cols = [
			{ field: 'name', header: 'Name' },
			{ field: 'size', header: 'Size' },
			{ field: 'type', header: 'Type' }
		];
    this.files=[
      {
          "data":{
              "name":"Documents",
              "size":"75kb",
              "type":"Folder"
          },
          "children":[
              {
                  "data":{
                      "name":"Work",
                      "size":"55kb",
                      "type":"Folder"
                  },
                  "children":[
                      {
                          "data":{
                              "name":"Expenses.doc",
                              "size":"30kb",
                              "type":"Document"
                          }
                      },
                      {
                          "data":{
                              "name":"Resume.doc",
                              "size":"25kb",
                              "type":"Resume"
                          }
                      }
                  ]
              },
              {
                  "data":{
                      "name":"Home",
                      "size":"20kb",
                      "type":"Folder"
                  },
                  "children":[
                      {
                          "data":{
                              "name":"Invoices",
                              "size":"20kb",
                              "type":"Text"
                          }
                      }
                  ]
              }
          ]
      },
      {
          "data":{
              "name":"Pictures",
              "size":"150kb",
              "type":"Folder"
          },
          "children":[
              {
                  "data":{
                      "name":"barcelona.jpg",
                      "size":"90kb",
                      "type":"Picture"
                  }
              },
              {
                  "data":{
                      "name":"primeui.png",
                      "size":"30kb",
                      "type":"Picture"
                  }
              },
              {
                  "data":{
                      "name":"optimus.jpg",
                      "size":"30kb",
                      "type":"Picture"
                  }
              }
          ]
      }
  ];
  }


}
