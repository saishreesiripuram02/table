import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./table/table.module').then( mod =>mod.TableModule)
  },
  {
    path:"add",
    loadChildren: () => import('./add/add.module').then( mod =>mod.AddModule)
  },
  {
    path:'update/:id',
    loadChildren: ()=> import('./update/update.module').then( mod => mod.UpdateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
