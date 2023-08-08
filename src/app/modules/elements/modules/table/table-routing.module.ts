import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from "./table.component";
import { OverviewComponent } from "../error-message/components/overview/overview.component";
import { ApiComponent } from "../error-message/components/api/api.component";
import { ExamplesComponent } from "../error-message/components/examples/examples.component";
import { ChangesComponent } from "../error-message/components/changes/changes.component";

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    children: [
      {
        path: '/overview',
        component: OverviewComponent
      },
      {
        path: '/api',
        component: ApiComponent
      },
      {
        path: '/examples',
        component: ExamplesComponent
      },
      {
        path: '/changes',
        component: ChangesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
