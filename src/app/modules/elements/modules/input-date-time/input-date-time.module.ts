import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputDateTimeRoutingModule } from './input-date-time-routing.module';
import { InputDateTimeComponent } from './input-date-time.component';
import { ContentWrapperModule } from "myrtex-mf-ui";
import { ApiComponent } from './components/api/api.component';
import { ChangesComponent } from './components/changes/changes.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { OverviewComponent } from './components/overview/overview.component';


@NgModule({
  declarations: [
    InputDateTimeComponent,
    ApiComponent,
    ChangesComponent,
    ExamplesComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    InputDateTimeRoutingModule,
    ContentWrapperModule
  ]
})
export class InputDateTimeModule { }
