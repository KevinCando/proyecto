import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full'},
  { path:'login', loadChildren: ()=>import('./core/auth').then(m =>m.LoginModule)},
  { path:'home', loadChildren: ()=>import('./modules/home').then(h=>h.HomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
