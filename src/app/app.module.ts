import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule, MyrtexMfUiModule} from 'myrtex-mf-ui';
import { MenuAdminModule } from "myrtex-mf-templates";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store";
import { MarkdownModule } from "ngx-markdown";
import { HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions } from "ngx-highlightjs";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MyrtexMfUiModule,
    ButtonModule,
    MenuAdminModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    MarkdownModule.forRoot(),
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        // fullLibraryLoader: () => import('highlight.js')
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        // @ts-ignore
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        },
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
