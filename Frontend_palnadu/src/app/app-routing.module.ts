import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",redirectTo:"Login",pathMatch: "full"},
  {path:"Login",component:LoginComponent},
  {path:"form",component:FormComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
