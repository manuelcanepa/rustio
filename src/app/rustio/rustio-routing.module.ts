import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RustioComponent } from './rustio.component';

const routes: Routes = [{
  path: '', component: RustioComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RustioRoutingModule { }
