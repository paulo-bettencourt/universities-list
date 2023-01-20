import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexModule} from "./index/index.module";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('../app/index/index.module').then(m=>m.IndexModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), IndexModule, MatButtonModule, MatTooltipModule],
  exports: [RouterModule, MatToolbarModule, MatIconModule]
})
export class AppRoutingModule { }
