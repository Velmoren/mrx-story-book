import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsComponent } from "./elements.component";

const routes: Routes = [
  {
    path: '',
    component: ElementsComponent
  },
  {
    path: 'error-message',
    loadChildren: () => import ('./modules/error-message/error-message.module').then(x => x.ErrorMessageModule)
  },
  {
    path: 'input-select',
    loadChildren: () => import ('./modules/input-select/input-select.module').then(x => x.InputSelectModule)
  },
  {
    path: 'input-date-time',
    loadChildren: () => import ('./modules/input-date-time/input-date-time.module').then(x => x.InputDateTimeModule)
  },
  {
    path: 'component',
    loadChildren: () => import ('./modules/md-component/md-component.module').then(x => x.MdComponentModule)
  },
  {
    path: 'table',
    loadChildren: () => import ('./modules/table/table.module').then(x => x.TableModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
