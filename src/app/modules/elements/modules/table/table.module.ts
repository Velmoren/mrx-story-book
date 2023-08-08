import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { ContentWrapperModule } from "myrtex-mf-ui";
import { ApiComponent } from './components/api/api.component';
import { ChangesComponent } from './components/changes/changes.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { OverviewComponent } from './components/overview/overview.component';


@NgModule({
  declarations: [
    TableComponent,
    ApiComponent,
    ChangesComponent,
    ExamplesComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    ContentWrapperModule
  ]
})
export class TableModule { }
