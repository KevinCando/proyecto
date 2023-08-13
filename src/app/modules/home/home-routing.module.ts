import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  {path : '', 
  component: HomeComponent,
  children:[
    { path:'user', loadChildren: ()=>import('./../user').then(au=>au.AdminUserModule)},
    { path:'area', loadChildren: ()=>import('./../area').then(a=>a.AdminAreaModule)},
    { path:'role', loadChildren: ()=>import('./../role').then(r=>r.AdminRoleModule)},
    { path:'worker', loadChildren: ()=>import('./../worker').then(w=>w.AdminWorkerModule)},
    { path:'victim', loadChildren: ()=>import('./../victim').then(v=>v.VictimModule)}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
