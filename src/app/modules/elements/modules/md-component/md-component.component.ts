import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { selectSidebarActive } from "../../../../store/header/selectors";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { toggleSidebar } from "../../../../store/header/actions";

@Component({
  selector: 'app-md-component',
  templateUrl: './md-component.component.html'
})
export class MdComponent {
  public activeTabId = 0
  public routes = [
    { id: 0, link: './overview', text: 'Описание' },
    { id: 1, link: './api', text: 'API' },
    { id: 2, link: './examples', text: 'Примеры' },
    { id: 3, link: './changes', text: 'Изменения' },
  ]

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }

  onTabClick(idx: number) {
    this.activeTabId = idx
  }

  public toggleSidebar(): void {
    this.store.dispatch(toggleSidebar())
  }
}





































