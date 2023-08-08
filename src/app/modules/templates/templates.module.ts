import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';
import { ContentWrapperModule } from "myrtex-mf-ui";


@NgModule({
  declarations: [
    TemplatesComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    ContentWrapperModule
  ]
})
export class TemplatesModule { }
