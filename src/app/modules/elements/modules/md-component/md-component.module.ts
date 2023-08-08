import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdComponentRoutingModule } from './md-component-routing.module';

import { MdComponent } from './md-component.component';
import { ContentWrapperModule, TabsModule } from "myrtex-mf-ui";
import { HttpClientModule } from "@angular/common/http";
import { MarkdownModule } from "ngx-markdown";



@NgModule({
  declarations: [
    MdComponent,
  ],
  imports: [
    CommonModule,
    MdComponentRoutingModule,
    HttpClientModule,
    ContentWrapperModule,
    TabsModule,
    MarkdownModule.forChild()
  ]
})
export class MdComponentModule { }
