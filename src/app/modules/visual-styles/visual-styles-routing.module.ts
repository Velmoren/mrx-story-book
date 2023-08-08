import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualStylesComponent } from "./visual-styles.component";

const routes: Routes = [
  {
    path: '',
    component: VisualStylesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualStylesRoutingModule { }
