import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexModule} from "./index/index.module";

const routes: Routes = [{
  path: '',
  loadChildren: () => import('../app/index/index.module').then(m=>m.IndexModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), IndexModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
