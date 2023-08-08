import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./modules/main/main.module').then(x => x.MainModule)
  },
  {
    path: 'visual-styles',
    loadChildren: () => import ('./modules/visual-styles/visual-styles.module').then(x => x.VisualStylesModule)
  },
  {
    path: 'elements',
    loadChildren: () => import ('./modules/elements/elements.module').then(x => x.ElementsModule)
  },
  {
    path: 'templates',
    loadChildren: () => import ('./modules/templates/templates.module').then(x => x.TemplatesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
