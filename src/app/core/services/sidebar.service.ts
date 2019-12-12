import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'General',
      type: 'header'
    },
    {
      title: 'Tablero',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      badge: {
        text: 'Beta',
        class: 'badge-primary'
      },
      submenus: [
        {
          title: 'Tablero 1'
          // ,
          // badge: {
          //   text: 'Pro ',
          //   class: 'badge-success'
          // }
        },
        {
          title: 'Tablero 2'
        },
        {
          title: 'Tablero 3'
        }
      ]
    },
    {
      title: 'Orden',
      icon: 'fa fa-clipboard',
      active: false,
      type: 'dropdown',
      badge: {
        text: 'Nuevo ',
        class: 'badge-warning'
        // text: '3',
        // class: 'badge-danger'
      },
      submenus: [
        {
          title: 'Lista',
          badge: {
            text: 'Nuevo ',
            class: 'badge-warning'
          },
          link: ['/scetransporte/orden/lista-orden']
        },
        {
          title: 'Registro',
          badge: {
            text: 'Nuevo ',
            class: 'badge-warning'
          },
          // link : 'pages/orden/(registro:open)'
          link:
            ['/scetransporte/orden', {
              outlets: { registro: 'open' }
            }
            ]
        },
        {
          title: 'Reporte',
          badge: {
            text: 'Nuevo ',
            class: 'badge-warning'
          },
          link:
            ['/scetransporte/orden', {
              outlets: { reporte: 'open' }
            }
            ]
        }
      ]
    },
    {
      title: 'Componentes',
      icon: 'far fa-gem',
      active: false,
      type: 'dropdown',
      badge: {
        text: 'Beta',
        class: 'badge-primary'
      },
      submenus: [
        {
          title: 'General',
        },
        {
          title: 'Panels'
        },
        {
          title: 'Tables'
        },
        {
          title: 'Icons'
        },
        {
          title: 'Forms'
        }
      ]
    },
    {
      title: 'Estadisticas',
      icon: 'fa fa-chart-line',
      active: false,
      type: 'dropdown',
      badge: {
        text: 'Beta',
        class: 'badge-primary'
      },
      submenus: [
        {
          title: 'Pie chart',
        },
        {
          title: 'Line chart'
        },
        {
          title: 'Bar chart'
        },
        {
          title: 'Histogram'
        }
      ]
    },
    {
      title: 'Geolocalización',
      icon: 'fa fa-globe',
      active: false,
      type: 'dropdown',
      badge: {
        text: 'Beta',
        class: 'badge-primary'
      },
      submenus: [
        {
          title: 'Google maps',
        },
        {
          title: 'Open street map'
        }
      ]
    },
    {
      title: 'Extra',
      type: 'header'
    },
    {
      title: 'Tareas',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      badge: {
        text: 'Beta',
        class: 'badge-primary'
      },
    },
    {
      title: 'Calendario',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple',
      badge: {
        text: 'Beta',
        class: 'badge-primary'
      }
    },
    {
      title: 'Ejemplos',
      icon: 'fa fa-folder',
      active: false,
      type: 'simple',
      badge: {
        text: 'Beta',
        class: 'badge-primary'
      }
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = !this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
