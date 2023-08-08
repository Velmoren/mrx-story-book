import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualStylesRoutingModule } from './visual-styles-routing.module';
import { VisualStylesComponent } from './visual-styles.component';
import { ContentWrapperModule } from "myrtex-mf-ui";


@NgModule({
  declarations: [
    VisualStylesComponent
  ],
  imports: [
    CommonModule,
    VisualStylesRoutingModule,
    ContentWrapperModule
  ]
})
export class VisualStylesModule { }
