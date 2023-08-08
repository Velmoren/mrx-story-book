import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputSelectRoutingModule } from './input-select-routing.module';
import { InputSelectComponent } from './input-select.component';
import { ContentWrapperModule } from "myrtex-mf-ui";
import { OverviewComponent } from './components/overview/overview.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { ChangesComponent } from './components/changes/changes.component';
import { ApiComponent } from './components/api/api.component';


@NgModule({
  declarations: [
    InputSelectComponent,
    OverviewComponent,
    ExamplesComponent,
    ChangesComponent,
    ApiComponent
  ],
  imports: [
    CommonModule,
    InputSelectRoutingModule,
    ContentWrapperModule
  ]
})
export class InputSelectModule { }
