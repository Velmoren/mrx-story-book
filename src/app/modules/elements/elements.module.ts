import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsComponent } from './elements.component';
import { ContentWrapperModule, MyrtexMfUiModule } from "myrtex-mf-ui";


@NgModule({
  declarations: [
    ElementsComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    ContentWrapperModule,
    MyrtexMfUiModule
  ]
})
export class ElementsModule { }
