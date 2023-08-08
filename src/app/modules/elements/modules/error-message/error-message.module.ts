import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMessageRoutingModule } from './error-message-routing.module';
import { ErrorMessageComponent } from './error-message.component';
import { ContentWrapperModule, TabsModule } from "myrtex-mf-ui";
import { ApiComponent } from './components/api/api.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { ChangesComponent } from './components/changes/changes.component';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions } from "ngx-highlightjs";
import { GIST_OPTIONS } from "ngx-highlightjs/plus";



@NgModule({
  declarations: [
    ErrorMessageComponent,
    ApiComponent,
    OverviewComponent,
    ExamplesComponent,
    ChangesComponent
  ],
  imports: [
    CommonModule,
    ErrorMessageRoutingModule,
    HttpClientModule,
    ContentWrapperModule,
    TabsModule,
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressBarModule,
    HighlightModule
  ],
  providers: [

  ],
})
export class ErrorMessageModule {
}
