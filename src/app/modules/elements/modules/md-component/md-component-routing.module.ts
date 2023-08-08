import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdComponent } from "./md-component.component";


const routes: Routes = [
  {
    path: '',
    component: MdComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdComponentRoutingModule { }
