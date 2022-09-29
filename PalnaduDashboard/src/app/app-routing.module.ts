import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboraddComponent } from './dashboradd/dashboradd.component';

const routes: Routes = [
  {path: '', redirectTo:'Dashboard',pathMatch:"full"},
  {path:'Dashboard',component: DashboraddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
