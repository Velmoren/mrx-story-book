import { Component } from '@angular/core';
import { MenuAdminModel } from "myrtex-mf-templates";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectSidebarActive } from "./store/header/selectors";
import { map } from "rxjs/operators";
import { toggleSidebar } from "./store/header/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public sidebarActive$: Observable<boolean> = this.store.select(selectSidebarActive).pipe(map((active: boolean) => active === null ? false : active))

  public menuModel: MenuAdminModel = {
    items: [
      {
        id: 0,
        title: 'Визуальный язык',
        routerLink: '/visual-styles'
      },
      {
        id: 1,
        title: 'Компоненты',
        routerLink: '/elements',
        items: [
          {
            id: 0,
            title: 'Формы',
          },
          {
            id: 1,
            title: 'Сообщение об ошибке',
            routerLink: '/elements/error-message'
          },
          {
            id: 2,
            title: 'Селект',
            routerLink: '/elements/input-select'
          },
          {
            id: 3,
            title: 'Выбор даты',
            routerLink: '/elements/input-date-time'
          },
          {
            id: 4,
            title: 'Компонент',
            routerLink: '/elements/component'
          },
          {
            id: 5,
            title: 'Представление данных',
          },
          {
            id: 6,
            title: 'Таблица',
            routerLink: '/elements/table'
          },
        ]
      },
      {
        id: 2,
        title: 'Шаблоны',
        routerLink: '/templates'
      },
    ]
  }

  constructor(private store: Store) {
  }

  toggleMenu(event: boolean) {
    this.store.dispatch(toggleSidebar())
  }
}
