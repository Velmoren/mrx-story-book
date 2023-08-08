import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ContentWrapperModule } from "myrtex-mf-ui";
import { MarkdownModule } from "ngx-markdown";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ContentWrapperModule,
    MarkdownModule.forChild()
  ]
})
export class MainModule { }
