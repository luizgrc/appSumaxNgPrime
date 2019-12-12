import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { SidebarService } from '../../services/sidebar.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
    selector: 'vertical-layout',
    templateUrl: './vertical-layout.component.html',
    styleUrls: ['./vertical-layout.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('slide', [
            state('up', style({ height: 0 })),
            state('down', style({ height: '*' })),
            transition('up <=> down', animate(200))
        ])
    ]
})
export class VerticalLayoutComponent implements OnInit {
    menus = [];
    constructor(private sidebarservice: SidebarService, private router: Router, private usuarioService: UsuarioService) {
        this.menus = sidebarservice.getMenuList();
    }

    ngOnInit() {
    }
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    toggle(currentMenu) {
        if (currentMenu.type === 'dropdown') {
            this.menus.forEach(element => {
                if (element === currentMenu) {
                    currentMenu.active = !currentMenu.active;
                } else {
                    element.active = false;
                }
            });
        }
    }

    getState(currentMenu) {

        if (currentMenu.active) {
            return 'down';
        } else {
            return 'up';
        }
    }

    hasBackgroundImage() {
        return this.sidebarservice.hasBackgroundImage;
    }
    logout() {
        this.usuarioService.logeado.emit(false);
        this.router.navigate(['/login']);
    }
}
