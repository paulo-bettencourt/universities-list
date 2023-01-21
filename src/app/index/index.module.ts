import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index/index.component';
import {RouterModule, Routes} from "@angular/router";
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes: Routes = [{
  path: '',
  component: IndexComponent
}];

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ]
})
export class IndexModule { }
