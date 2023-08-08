import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { selectSidebarActive } from "../../../../store/header/selectors";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { toggleSidebar } from "../../../../store/header/actions";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.less']
})
export class ErrorMessageComponent {
  public activeTabId = 0
  public routes = [
    { id: 0, link: './overview', text: 'Описание' },
    { id: 1, link: './api', text: 'API' },
    { id: 2, link: './examples', text: 'Примеры' },
    { id: 3, link: './changes', text: 'Изменения' },
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) { }

  onTabClick(idx: number) {
    this.activeTabId = idx
    this.router.navigate([this.routes[idx].link], {relativeTo: this.route})
  }

  public toggleSidebar(): void {
    this.store.dispatch(toggleSidebar())
  }
}





































