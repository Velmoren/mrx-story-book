import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorMessageComponent } from "./error-message.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { ApiComponent } from "./components/api/api.component";
import { ExamplesComponent } from "./components/examples/examples.component";
import { ChangesComponent } from "./components/changes/changes.component";

const routes: Routes = [
  {
    path: '',
    component: ErrorMessageComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'api',
        component: ApiComponent
      },
      {
        path: 'examples',
        component: ExamplesComponent
      },
      {
        path: 'changes',
        component: ChangesComponent
      },
      {
        path: '**',
        component: ChangesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorMessageRoutingModule { }
